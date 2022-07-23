import { useStore } from "./store";
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore"; 
import { db } from "./router/index";  

const isAdmin = async () => {}

const isRegistered = async () => {}

const clubEvents = async () => {}

const shopSchedule = async () => {}

// also has payment
const formTable = async () => {}

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
    useStore().registered = false;
    useStore().email = u.email;
    useStore().displayName = u.displayName;
}

export const clear_login = () => {
    useStore().auth = false;
    useStore().registered = false;
    useStore().email = "";
    useStore().displayName = "";
}