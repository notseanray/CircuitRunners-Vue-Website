import { useStore } from "./store";
import {
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    Query,
    query,
    setDoc,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "./router/index";
import { RegistrationInformation, SavableUserData } from "./types";

export const REGISTERED_DATA = {
    collection: "registration_data",
    document: "zxP7Hu8DuuKZXOHXeU2o",
};

export enum RegistrationStatus {
    NotRegistered = "NotRegistered",
    FormsPending = "FormsPending",
    PendingTeamAssignment = "PendingTeamAssignment",
    Complete = "Complete",
}

export const is_registered = async (email: String): Promise<string> => {
    useStore().loaded = true;
    const user_data = await getDoc(doc(db, REGISTERED_DATA.collection, email));
    if (!user_data) {
        return "Not Registered";
    }
    const data = user_data.data();
    if (!data) {
        return "Not Registered";
    }
    useStore().userdata = JSON.parse(JSON.stringify(data)) as SavableUserData;
    useStore().admin = data.admin;
    useStore().displayName = `${data.first_name} ${data.last_name}`;
    let actual_registered = "";
    if (
        data.paid &&
        data.parent_coc &&
        data.student_coc &&
        data.permission_form
    ) {
        actual_registered = "Complete";
    } else {
        actual_registered = "FormsPending";
    }
    if (
        actual_registered != data.register_status &&
        actual_registered.length > 0
    ) {
        await updateDoc(
            doc(db, REGISTERED_DATA.collection, useStore().userdata.email),
            {
                registration_status: actual_registered,
            }
        );
        useStore().register_status = actual_registered;
        useStore().userdata.register_status = actual_registered;
    }
    useStore().fetched = true;
    switch (data.registration_status) {
        case "NotRegistered":
            useStore().register_status = "Not Registered";
            return "Not Registered";
        case "FormsPending":
            useStore().register_status = "Forms Pending";
            return "Forms Pending";
        case "PendingTeamAssignment":
            useStore().register_status = "Pending Team Assignment";
            return "Pending Team Assignment";
        case "Complete":
            // only if it's complete do we set it to true
            useStore().registered = true;
            useStore().register_status = "Complete";
            return "Complete";
        default:
            useStore().register_status = "Not Registered";
            return "Not Registered";
    }
    /*
    const user_data = await getDoc(
		doc(db, REGISTERED_USERS.collection, REGISTERED_USERS.document)
    );
	if (!user_data) {
		return "Not Registered";
	}
	const data = user_data.data();
	for (const user of data.users) {
		const info = user.split("|");
		if (info.length < 2) {
			continue;
		}
		const [e, i, admin] = info;
		if (e == email) {
			if (info.length > 2 && admin && admin == "admin") {
				useStore().admin = true;
			}
            switch (i) {
                case "NotRegistered":
					useStore().register_status = "Not Registered";
					return "Not Registered";
                case "FormsPending":
					useStore().register_status = "Forms Pending";
					return "Forms Pending";
                case "PendingTeamAssignment":
					useStore().register_status = "Pending Team Assignment";
					return "Pending Team Assignment";
                case "Complete":
                    // only if it's complete do we set it to true
                    useStore().registered = true;
					useStore().register_status = "Complete";
					return "Complete";
				default:
					useStore().register_status = "Not Registered";
					return "Not Registered";
            }
		}
	}
	*/

    /*
    registered_users.forEach((u) => {
        const data = u.data();
        if (data.email && data.email == email) {
			if (data.admin) {
				useStore().admin = true;
			}
			//
            console.log(data.registered);
            console.log(data.registered == "FormsPending");
            if (data.registered == "NotRegistered") {
                return RegistrationStatus.NotRegistered;
            } else if (data.registered == "FormsPending") {
                return RegistrationStatus.FormsPending;
            } else if (data.registered == "PaymentPending") {
                return RegistrationStatus.PaymentPending;
            } else if (data.registered == "PendingTeamAssignment") {
                return RegistrationStatus.PendingTeamAssignment;
            } else if (data.registered == "Complete") {
                return RegistrationStatus.Complete;
            }
            return RegistrationStatus.NotRegistered;
			//
            // why is this not working?
            switch (data.registered) {
                case "NotRegistered":
					useStore().register_status = "Not Registered";
					return "Not Registered";
                case "FormsPending":
					useStore().register_status = "Forms Pending";
					return "Forms Pending";
                case "PaymentPending":
					useStore().register_status = "Payment Pending";
					return "Payment Pending";
                case "PendingTeamAssignment":
					useStore().register_status = "Pending Team Assignment";
					return "Pending Team Assignment";
                case "Complete":
                    // only if it's complete do we set it to true
                    useStore().registered = true;
					useStore().register_status = "Complete";
					return "Complete";
				default:
					useStore().register_status = "Not Registered";
					return "Not Registered";
            }
        }
    });
	*/
    return "Not Registered";
};

export const register_user = async (u: RegistrationInformation) => {
    if (!u.validated) {
        // must be verified first
        return;
    }
    await setDoc(doc(db, REGISTERED_DATA.collection, u.email), {
        first_name: u.first_name,
        last_name: u.last_name,
        email: u.email,
        phone: u.phone,
        parent_name: u.parent_name,
        parent_phone: u.parent_phone,
        parent_email: u.parent_email,
        grad_year: u.grad_year,
        previous_experience: u.previous_experience,
        first_experience: u.first_experience,
        team_preference: u.team_preference,
        cad_skills: u.cad_skills,
        change_teams: u.change_teams,
        change_reason: u.change_reason,
        cad_fill_in: u.cad_fill_in,
        programming_skills: u.programming_skills,
        programming_fill_in: u.programming_fill_in,
        registration_status: "FormsPending",
        paid: false,
        parent_coc: false,
        student_coc: false,
        permission_form: false,
        admin: false,
    });
    const data = {
        admin: false,
        registration_status: "FormsPending",
        parent_coc: false,
        student_coc: false,
        permission_form: false,
        paid: false,
        notified: false,
        ...u,
    } as SavableUserData;
    useStore().userdata = data;
};

// maybe store events by id + "|" + date string?
export const club_events = async (public_access: boolean): Promise<boolean> => {
    let q: Query<DocumentData>;
    if (public_access) {
        q = query(
            collection(db, "events"),
            where("public", "==", public_access.toString())
        );
    } else {
        q = query(collection(db, "events"));
    }
    const query_snapshot = await getDocs(q);
    query_snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    return true;
};

export const check_registration = async () => {
    if (!useStore().userdata) {
        return;
    }
    if (
        useStore().userdata.paid &&
        useStore().userdata.parent_coc &&
        useStore().userdata.student_coc &&
        useStore().userdata.permission_form
    ) {
        await updateDoc(
            doc(db, REGISTERED_DATA.collection, useStore().userdata.email),
            {
                registration_status: "Complete",
            }
        );
        useStore().userdata.registration_status = "Complete";
        useStore().register_status = "Complete";
        return true;
    } else {
        return false;
    }
};

export const paid_for = async (
    email: string,
    status: boolean
): Promise<boolean> => {
    await updateDoc(doc(db, REGISTERED_DATA.collection, email), {
        paid: status,
    });
    useStore().userdata.paid = status;
    return await check_registration();
};
export const parent_coc_complete = async (
    email: string,
    status: boolean
): Promise<boolean> => {
    await updateDoc(doc(db, REGISTERED_DATA.collection, email), {
        parent_coc: status,
    });
    useStore().userdata.parent_coc = status;
    return await check_registration();
};
export const student_coc_complete = async (
    email: string,
    status: boolean
): Promise<boolean> => {
    await updateDoc(doc(db, REGISTERED_DATA.collection, email), {
        student_coc: status,
    });
    return await check_registration();
};
export const notified = async (email: string, status: boolean) => {
    await updateDoc(doc(db, REGISTERED_DATA.collection, email), {
        notified: status,
    });
    useStore().userdata.notified = status;
};
export const permission_form_complete = async (
    email: string,
    status: boolean
) => {
    await updateDoc(doc(db, REGISTERED_DATA.collection, email), {
        permission_form: status,
    });
    useStore().userdata.permission_form = status;
};

const shop_schedule = async () => {};

// also has payment
const form_table = async () => {};

// probably won't do this, need people to maintain it
const inventory = async () => {};

export const store_login = async (u: {
    email: string;
    displayName: string;
}) => {
    await is_registered(u.email);
    useStore().loaded = true;
    useStore().auth = true;
    useStore().email = u.email;
    useStore().displayName = u.displayName;
    // we overwrite display name if it's set in here
};

export const clear_login = () => {
    useStore().loaded = false;
    useStore().auth = false;
    useStore().register_status = "Not Registered";
    useStore().registered = false;
    useStore().email = "";
    useStore().displayName = "";
};

export const checkPage = (admin: boolean, execute: Function) => {
    let counter = 0;
    const checker = setInterval(() => {
        if (
            useStore().fetched &&
            ((admin && useStore().admin) ||
                (!admin && useStore().auth) ||
                (!admin && useStore().userdata))
        ) {
            clearInterval(checker);
            return;
        }
        if (counter > 20 && !useStore().loaded) {
            clearInterval(checker);
            execute();
        }
        counter++;
    }, 100);
};
