import { useStore } from "./store";
import { collection, doc, DocumentData, getDoc, getDocs, getFirestore, Query, query, setDoc, where } from "firebase/firestore"; 
import { db } from "./router/index";  

const is_registered = async (): Promise<boolean> => {
    const registered_users = await getDoc(doc(db, "register", "ypL3sI9CcxUyuC21lpcN"));
    if (!registered_users) {
        // handle error
    }
    return registered_users.data()?.users.includes(useStore().email);
}

// maybe store events by id + "|" + date string?
export const club_events = async (public_access: boolean): Promise<boolean> => {
    let q: Query<DocumentData>;
    if (public_access) {
        q = query(collection(db, "events"), where("public", "==", public_access.toString()));
    } else {
        q = query(collection(db, "events"));
    }
    const query_snapshot = await getDocs(q);
    query_snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    }); 
    return true;
}

const shop_schedule = async () => {}

// also has payment
const form_table = async () => {}

// probably won't do this, need people to maintain it
const inventory = async () => {}

export const store_login = async (u: { email: string; displayName: string; }) => {
    const admins_data = await getDoc(doc(db, "admin", "8Sz2vYqsP9j1etDGD48e"));
    if (!admins_data) {
        // handle error
    }
    const admins = admins_data.data()?.users;
    // add proper error handling ^
    console.log(admins);
    useStore().admin = admins.includes(u.email);
    console.log(admins.includes(u.email))
    useStore().auth = true;
    useStore().registered = await is_registered();
    useStore().email = u.email;
    useStore().displayName = u.displayName;
}

export const clear_login = () => {
    useStore().auth = false;
    useStore().registered = false;
    useStore().email = "";
    useStore().displayName = "";
}