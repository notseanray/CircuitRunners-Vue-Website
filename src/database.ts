import { useStore } from "./store";
import {
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    updateDoc,
	arrayUnion,
    Query,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { db } from "./router/index";
import { RegistrationInformation } from "./types";

const REGISTERED_USERS = {
	collection: "registered_users",
	document: "root",
};

const REGISTERED_DATA = {
    collection: "registration_data",
    document: "zxP7Hu8DuuKZXOHXeU2o",
};

export enum RegistrationStatus {
    NotRegistered = "NotRegistered",
    FormsPending = "FormsPending",
    PendingTeamAssignment = "PendingTeamAssignment",
    Complete = "Complete",
}

export const is_registered = async (
    email: String
): Promise<string> => {
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
    console.log(u);
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
        cad_fill_in: u.cad_fill_in,
        programming_skills: u.programming_skills,
        programming_fill_in: u.programming_fill_in,
		forms: false,
		paid: false,
		admin: false,
    });
	await updateDoc(doc(db, REGISTERED_USERS.collection, REGISTERED_USERS.document), {
		users: arrayUnion(`${u.email}|FormsPending`)
	});
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

const shop_schedule = async () => {};

// also has payment
const form_table = async () => {};

// probably won't do this, need people to maintain it
const inventory = async () => {};

export const store_login = async (u: {
    email: string;
    displayName: string;
}) => {
    useStore().auth = true;
    await is_registered(u.email);
    useStore().email = u.email;
    useStore().displayName = u.displayName;
};

export const clear_login = () => {
    useStore().auth = false;
    useStore().register_status = "Not Registered";
	useStore().registered = false;
    useStore().email = "";
    useStore().displayName = "";
};
