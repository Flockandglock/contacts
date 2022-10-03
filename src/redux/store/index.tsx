import { configureStore } from "@reduxjs/toolkit";
import contacts from "../../components/contacts-list/contactsSlice";


// Настариваем наш стор
const store = configureStore({
    reducer: contacts,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;