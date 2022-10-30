<template>
    <div class="titlecontainer mb-48">
        <h1 class="text-6xl text-bold mt-8 mb-6">Dashboard</h1>
        <h2 class="my-8 border p-3 text-[20px]">
            Registration status: {{ this.clubRegister() }}
        </h2>
        <h1 v-if="this.fully_registered && data_fetched">
            <h2 class="text-lg my-8 border p-3">
                You are good to go for registration! Your CircuitRunners
                email will be generated within a few days and you will be
                added to the slack where we coordinate all of our
                activities.
            </h2>
        </h1>
        <h1
            v-if="this.previous_member"
            class="text-lg text-red-400 text-bold"
        >
            Even if you were a previous member, you must still register.
        </h1>
        <div
            v-if="!this.forms_complete && !this.fully_registered"
            class="m-4 flex-wrap text-center justify-center"
        >
            <h2 class="text-lg my-8 mx-[20%]">
                Download these 3 forms. Use a pdf editor to sign the forms
                where required. An online one such as
                <a
                    class="text-green-300"
                    href="https://www.sejda.com/pdf-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Sejda
                </a>
                works perfectly if you do not have one installed, Microsoft
                Edge is bundled with an editor as well. An alternative
                method is to print the form out, scan them back as pdfs,
                then upload them again. Once the forms are signed upload
                them below. If you are unable to do this please contact
                <a
                    class="text-green-300"
                    href="mailto:info@circuitrunners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    info@circuitrunners.com
                </a>
                . Only once all fields are complete you are fully
                registered. If you upload the wrong file, reupload it and it
                will be replaced in the database. All files must be pdfs.
            </h2>
            <br />
            <a href="/student_member_code_of_conduct.pdf" download>
                <q-btn
                    label="Download Student Code of Conduct"
                    color="primary"
                    class="text-black mb-2"
                />
            </a>
            <br />
            <div>
                <q-btn
                    label="Upload Student Code of Conduct"
                    color="primary"
                    class="text-black"
                    @click="onPickFileStudentCoc"
                />
                <input
                    type="file"
                    style="display: none"
                    ref="fileInputStudentCoc"
                    accept="application/pdf"
                    @change="upload_student_coc"
                />
            </div>
            <br />
            Student Code of Conduct: {{ this.student_coc_message }}
            <br />
            <a href="/parent_code_of_conduct.pdf" download>
                <q-btn
                    label="Download Parent Code of Conduct"
                    color="primary"
                    class="text-black mt-10 mb-2"
                />
            </a>
            <br />
            <div>
                <q-btn
                    label="Upload Parent Code of Conduct"
                    color="primary"
                    class="text-black"
                    @click="onPickFileParentCoc"
                />
                <input
                    type="file"
                    style="display: none"
                    ref="fileInputParentCoc"
                    accept="application/pdf"
                    @change="upload_parent_coc"
                />
            </div>
            <br />
            Parent Code of Conduct: {{ this.parent_coc_message }}
            <br />
            <a href="/club_permission_form.pdf" download>
                <q-btn
                    label="Download Club Permission Form"
                    color="primary"
                    class="text-black mt-10 mb-2"
                />
            </a>
            <div>
                <q-btn
                    label="Upload Club Permission Form"
                    color="primary"
                    class="text-black"
                    @click="onPickFilePermissionForm"
                />
                <input
                    type="file"
                    style="display: none"
                    ref="fileInputPermissionForm"
                    accept="application/pdf"
                    @change="upload_club_permission"
                />
            </div>
            <br />
            Club Permission Form: {{ this.permission_message }}
        </div>
        <div class="mt-10" />
        <h1 v-if="show_registration_button">
            <q-btn
                label="Register Here"
                color="primary"
                class="text-black"
                v-on:click="toRegister"
            />
        </h1>
        <div id="paypal-buttons" />
        <div v-if="paid_for && !fully_registered && !this.hide_pay">
            Payment Status: ✅ Payment Complete
        </div>
        <div v-if="!paid_for && !fully_registered && !this.hide_pay">
            <div class="text-center">
                Payment Status: ❌ Payment Incomplete
            </div>
            <br />
            <div class="text-sm my-8 mx-[20%]">
                If payment does not immediately update, please allow 1-3
                business days for the status to be processed. If you have
                any issues with payment, please email
                <a
                    class="text-green-300"
                    href="mailto:info@circuitrunners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    info@circuitrunners.com </a
                >.
            </div>
        </div>
    </div>
    <div class="pb-5" />
</template>

<script>
import { useStore } from "../../store";
import {
    paid_for,
    parent_coc_complete,
    student_coc_complete,
    permission_form_complete,
    notified,
    checkPage,
} from "../../database";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

export default {
    data() {
        return {
            email: "",
            password: "",
            forms_complete: false,
            show_registration_button: false,
            fully_registered: false,
            hide_pay: false,
            already_loaded: false,
            second_load: 10,
            third_load: false,
            fourth_load: false,
            data_fetched: false,
            previous_member: false,
            product: {
                price: 255.0,
                description: "CircuitRunners club dues",
                img: "",
            },
            paid_for: true,
            student_coc_message: " ❌ Incomplete",
            parent_coc_message: " ❌ Incomplete",
            permission_message: " ❌ Incomplete",
            paypal: undefined,
            message: "",
            reloads: 100,
        };
    },
    mounted: function () {
        if (useStore().loaded) {
            checkPage(false, () => {
                this.$router.push("/login");
            });
        }
        if (useStore().registered) {
            return;
        }
        const script = document.createElement("script");
        script.setAttribute("data-namespace", "paypal_sdk");
        script.src =
            "paypal";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },
    methods: {
        toRegister() {
            this.$router.push("/register");
        },
        onPickFileStudentCoc() {
            this.student_coc_message = "Selecting file.";
            this.$refs.fileInputStudentCoc.click();
        },
        onPickFileParentCoc() {
            this.parent_coc_message = "Selecting file.";
            this.$refs.fileInputParentCoc.click();
        },
        onPickFilePermissionForm() {
            this.permission_message = "Selecting file.";
            this.$refs.fileInputPermissionForm.click();
        },
        read_file(event) {
            const files = event.target.files;
            if (!files || files.length < 1) {
                return;
            }
            //let filename = files[0].name;
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files[0]);
            const metadata = {
                contentType: "application/pdf",
            };
            // if the base64 encoded document data is greater than 4mb we got an error
            const error = ((4 * files[0].length) / 3 + 3) & (~3 > 4194304);
            return [files[0], metadata, error];
        },
        upload_student_coc(event) {
            const [file, metadata, error] = this.read_file(event);
            const first_name = useStore().userdata.first_name;
            const last_name = useStore().userdata.last_name;
            const grad_year = useStore().userdata.grad_year;
            if (!file || error || !first_name || !last_name || !grad_year) {
                if (error) {
                    this.student_coc_message =
                        "Error uploading, is the file over 4mb?";
                }
                return;
            }
            const storage = getStorage();
            const storageRef = ref(
                storage,
                "student_coc/" +
                    `${first_name}_${last_name}_${grad_year}_student_coc.pdf`
            );
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.student_coc_message =
                        "Upload is " + progress + "% complete.";
                    switch (snapshot.state) {
                        case "paused":
                            this.student_coc_message =
                                "Upload paused, please try again.";
                            break;
                        case "running":
                            this.student_coc_message = "Upload has started.";
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            this.student_coc_message =
                                "Storage bucket unreachable, please contact staff.";
                            break;
                        case "storage/canceled":
                            this.student_coc_message =
                                "Upload canceled, please try again.";
                            break;
                        case "storage/unknown":
                            this.student_coc_message =
                                "Unknown Error occured, please try again.";
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((_) => {
                        student_coc_complete(useStore().userdata.email, true);
                        this.student_coc_message = " ✅ Complete: " + file.name;
                        localStorage.setItem("student_coc_name", file.name);
                    });
                }
            );
        },
        upload_parent_coc(event) {
            const [file, metadata, error] = this.read_file(event);
            const first_name = useStore().userdata.first_name;
            const last_name = useStore().userdata.last_name;
            const grad_year = useStore().userdata.grad_year;
            if (!file || error || !first_name || !last_name || !grad_year) {
                if (error) {
                    this.parent_coc_message =
                        "Error uploading, is the file over 4mb?";
                }
                return;
            }
            const storage = getStorage();
            const storageRef = ref(
                storage,
                "parent_coc/" +
                    `${first_name}_${last_name}_${grad_year}_parent_coc.pdf`
            );
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.parent_coc_message =
                        "Upload is " + progress + "% complete.";
                    switch (snapshot.state) {
                        case "paused":
                            this.parent_coc_message =
                                "Upload paused, please try again.";
                            break;
                        case "running":
                            this.parent_coc_message = "Upload has started.";
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            this.parent_coc_message =
                                "Storage bucket unreachable, please contact staff.";
                            break;
                        case "storage/canceled":
                            this.parent_coc_message =
                                "Upload canceled, please try again.";
                            break;
                        case "storage/unknown":
                            this.parent_coc_message =
                                "Unknown Error occured, please try again.";
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((_) => {
                        parent_coc_complete(useStore().userdata.email, true);
                        this.parent_coc_message = " ✅ Complete: " + file.name;
                        localStorage.setItem("parent_coc_name", file.name);
                    });
                }
            );
        },
        upload_club_permission(event) {
            const [file, metadata, error] = this.read_file(event);
            const first_name = useStore().userdata.first_name;
            const last_name = useStore().userdata.last_name;
            const grad_year = useStore().userdata.grad_year;
            if (!file || error || !first_name || !last_name || !grad_year) {
                if (error) {
                    this.permission_message =
                        "Error uploading, is the file over 4mb?";
                }
                return;
            }
            const storage = getStorage();
            const storageRef = ref(
                storage,
                "permission/" +
                    `${first_name}_${last_name}_${grad_year}_permission_form.pdf`
            );
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.permission_message =
                        "Upload is " + progress + "% complete.";
                    switch (snapshot.state) {
                        case "paused":
                            this.permission_message =
                                "Upload paused, please try again.";
                            break;
                        case "running":
                            this.permission_message = "Upload has started.";
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            this.permission_message =
                                "Storage bucket unreachable, please contact staff.";
                            break;
                        case "storage/canceled":
                            this.permission_message =
                                "Upload canceled, please try again.";
                            break;
                        case "storage/unknown":
                            this.permission_message =
                                "Unknown Error occured, please try again.";
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((_) => {
                        permission_form_complete(
                            useStore().userdata.email,
                            true
                        );
                        this.permission_message = " ✅ Complete: " + file.name;
                        localStorage.setItem("permission_form_name", file.name);
                    });
                }
            );
        },
        setLoaded: function () {
            // if we are registered (fully) already or if the dom element that we
            // need to render this crap at doesn't exist then don't render it
            this.paypal = paypal_sdk.Buttons({
                createOrder: (_data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: this.product.description,
                                amount: {
                                    currency_code: "USD",
                                    value: this.product.price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (_data, actions) => {
                    this.paid_for = true;
                    const order = await actions.order.capture();
                    const _ = order.status;
                    this.fully_registered =
                        useStore().register_status == "Complete";
                    if (await paid_for(useStore().userdata.email, true)) {
                        window.location.reload();
                    }
                },
                onError: (_) => {
                    return;
                },
            });
        },
        // we can probably consolidate these into 1 method, but that's okay
        clubRegister() {
            if (!useStore().fetched && !useStore().loaded) {
                this.hide_pay = true;
                this.show_registration_button = true;
                return "Loading...";
            }
            const update_form_status = () => {
                if (useStore().userdata && useStore().userdata.student_coc) {
                    let msg = " ✅ Complete";
                    const name = localStorage.getItem("student_coc_name");
                    if (name) {
                        msg += ": " + name;
                    }
                    this.student_coc_message = msg;
                }
                if (useStore().userdata && useStore().userdata.parent_coc) {
                    let msg = " ✅ Complete";
                    const name = localStorage.getItem("parent_coc_name");
                    if (name) {
                        msg += ": " + name;
                    }
                    this.parent_coc_message = msg;
                }
                if (
                    useStore().userdata &&
                    useStore().userdata.permission_form
                ) {
                    let msg = " ✅ Complete";
                    const name = localStorage.getItem("permission_form_name");
                    if (name) {
                        msg += ": " + name;
                    }
                    this.permission_message = msg;
                }
            };
            if (useStore().loaded && !useStore().userdata) {
                this.forms_complete = true;
                this.show_registration_button = true;
                this.hide_pay = true;
                return "Not Registered";
            }
            if (this.second_load > 1 && this.third_load && !this.fourth_load) {
                const checker = setTimeout(() => {
                    if (useStore().loaded && useStore().userdata) {
                        clearTimeout(checker);
                    }
                    this.show_registration_button = false;
                    this.forms_complete = false;
                    this.fully_registered = false;
                    this.second_load -= 1;
                    return "Not Registered";
                }, 500);
            }
            const data = useStore().register_status;
            this.paid_for = useStore().userdata.paid;
            this.data_fetched = true;
            this.previous_member = useStore().userdata.previous_experience;
            if (data == "Not Registered") {
                this.third_load = true;
                this.forms_complete = true;
                this.show_registration_button = true;
            } else if (data == "Forms Pending") {
                this.hide_pay = false;
                if (
                    useStore().userdata.paid &&
                    useStore().userdata.parent_coc &&
                    useStore().userdata.student_coc &&
                    useStore().userdata.permission_form
                ) {
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
                if (
                    this.paypal &&
                    !this.already_loaded &&
                    !this.fully_registered &&
                    !this.paid_for &&
                    this.third_load
                ) {
                    this.already_loaded = true;
                    this.product.description = `CircuitRunners club dues ${new Date().getFullYear()} for ${
                        useStore().userdata.first_name
                    } ${useStore().userdata.last_name} (${
                        useStore().userdata.email
                    })`;
                    this.paypal.render("#paypal-buttons");
                }
                this.third_load = true;
                this.forms_complete = false;
                update_form_status();
                return "Forms or Payment Pending";
            } else if (data == "Complete") {
                this.hide_pay = false;
                this.third_load = true;
                if (!useStore().userdata.notified) {
                    try {
                        let request = new XMLHttpRequest();
                        request.open(
                            "POST",
                            "https://discord.com/api/webhooks/1008112271987310642/y723OdRQqrya58ntNEkVqiB6jjai81kGuPlRMwqzHYdLfpOKMYpdM5GdA2CfyANnTaD9"
                        );
                        request.setRequestHeader(
                            "Content-type",
                            "application/json"
                        );
                        const params = {
                            username: "new CR applicant!!!!11",
                            avatar_url:
                                "https://preview.redd.it/da8gul1w0yc91.png?width=640&crop=smart&auto=webp&s=1fffcefdb5ee1dd2bc029ea1e2d451d94be054be",
                            content: `${useStore().userdata.first_name} ${
                                useStore().userdata.last_name
                            } (grad year: ${useStore().userdata.grad_year}) ${
                                useStore().userdata.email
                            } just registered for CR. ${
                                useStore().userdata.previous_experience
                                    ? "They were previously in CR"
                                    : "They are a newcomer!!!!"
                            }`,
                        };
                        request.send(JSON.stringify(params));
                        useStore().userdata.notified = true;
                        // we don't have top level await
                        notified(useStore().userdata.email, true).then(
                            (_) => {}
                        );
                        localStorage.removeItem("student_coc_name");
                        localStorage.removeItem("parent_coc_name");
                        localStorage.removeItem("permission_form_name");
                    } catch {}
                }
                update_form_status();
                this.fully_registered = true;
                this.forms_complete = true;
                // todo time validation to hide registration button if it's too late
                const date = new Date().toLocaleString();
                // todo
                this.registered = true;
            }
            return data;
        },
        isRegistered() {
            return useStore().registered;
        },
    },
};
</script>

<style>
.titlecontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.border {
    border: 3px solid white;
}
</style>
