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
    where,
} from "firebase/firestore";
import { db } from "./router/index";
import { RegistrationInformation } from "./types";

const REGISTERED_COLLECTION = {
	collection: "registered",
	document: "ypL3sI9CcxUyuC21lpcN",
};

const REGISTERED_DATA = {
    collection: "registration_data",
    document: "zxP7Hu8DuuKZXOHXeU2o",
};

const ADMIN_COLLECTION = {
	collection: "admin",
	document: "8Sz2vYqsP9j1etDGD48e",
};

export enum RegistrationStatus {
	NotRegistered = "NotRegistered",
	PaymentPending = "PaymentPending",
	PendingTeamAssignment = "PendingTeamAssignment",
	Complete = "Complete",
};

export const registration_status_to_message = (r: RegistrationStatus): string => {
	switch (r) {
		case RegistrationStatus.PaymentPending:
			return "Payment Pending";
		case RegistrationStatus.PendingTeamAssignment:
			return "Pending Team Assignment";
		case RegistrationStatus.Complete:
			useStore().registered = true;
			return "Complete";
		default:
			return "Not Registered";
	};
}

export const is_registered = async (email: String): Promise<RegistrationStatus> => {
    const registered_users = await getDoc(
        doc(
            db,
            REGISTERED_COLLECTION.collection,
			REGISTERED_COLLECTION.document,
        )
    );
    if (!registered_users) {
        // handle error
		return RegistrationStatus.NotRegistered;
    }
	const data = registered_users.data();
    if (!data) {
        // handle error
		return RegistrationStatus.NotRegistered;
    }
	for (const d in data) {
		const info = data[d].split("|");
		if (!info || info.length < 2) {
			return RegistrationStatus.NotRegistered;
		}
		if (info[0] == email) {
			console.log(info)
			switch (info[1]) {
				case "NotRegistered":
					return RegistrationStatus.NotRegistered;
				case "PaymentPending":
					return RegistrationStatus.PaymentPending;
				case "PendingTeamAssignment":
					return RegistrationStatus.PendingTeamAssignment;
				case "Complete":
					// only if it's complete do we set it to true
					useStore().registered = true;
					return RegistrationStatus.Complete;
			}
		}
	}
	return RegistrationStatus.NotRegistered;
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
        grad_year: u.grad_year,
        previous_experience: u.previous_experience,
        first_experience: u.first_experience,
        team_preference: u.team_preference,
        useful_skills: u.useful_skills,
        registered: false, // this is kinda janky, but we are just gonna assume they are not registered
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
    const admins_data = await getDoc(doc(db, ADMIN_COLLECTION.collection, ADMIN_COLLECTION.document));
    if (!admins_data) {
        // handle error
    }
    const admins = admins_data.data()?.users;
    // add proper error handling ^
    console.log("admins " + admins);
    useStore().admin = admins.includes(u.email);
    console.log("is admin " + admins.includes(u.email));
    useStore().auth = true;
	const registration = await is_registered(u.email);
    useStore().register_status = registration;
    console.log(useStore().registered);
    useStore().email = u.email;
    useStore().displayName = u.displayName;
};

export const clear_login = () => {
    useStore().auth = false;
    useStore().registered = RegistrationStatus.NotRegistered;
    useStore().email = "";
    useStore().displayName = "";
};
