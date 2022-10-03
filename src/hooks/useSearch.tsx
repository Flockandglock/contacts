import { useMemo } from "react";

import { Contact } from "../components/contacts-list/contactsSlice";


// Поиск по строке
export const useSearch = (contacts: Array<Contact>, query: string) => {

    const searchedContacts = useMemo(() => {
        return contacts.filter(item => item.name.indexOf(query) > -1 || item.sername.indexOf(query) > -1)
    }, [query, contacts]);

    return searchedContacts
};