import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useSearch } from "../../hooks/useSearch";
import { deleteContacts, selectEditContact, toggleEdit } from "./contactsSlice";
import { Contact, ArrayContacts } from './contactsSlice';

import ContactsListItem from "../contacts-list-item/ContactsListItem";
import ContactPanel from '../contact-panel/ContactPanel';

import './contactslist.scss';



const ContactsList = () => {

    const { contacts, query, edit, idForEdit } = useSelector((state: ArrayContacts): ArrayContacts => state);
    const searchedContacts = useSearch(contacts, query);

    const dispatch = useDispatch();


    const selectIdForEdit = (id: number) => {
        dispatch(selectEditContact(id));
        dispatch(toggleEdit(true))
    };


    const removeContact = useCallback((id: number) => {
        dispatch(deleteContacts(id))
    }, []);


    const renderEmplList = (arr: Array<Contact>) => {
        if (arr.length === 0) {
            return <h5>Контакты не найдены</h5>
        }

        return arr.map(({ id, ...props }) => {
            if (idForEdit === id && edit) {
                return <ContactPanel />
            }

            return <ContactsListItem key={id}
                {...props}
                selectIdForEdit={() => selectIdForEdit(id)}
                removeContact={() => removeContact(id)} />
        });
    };

    const elements = renderEmplList(searchedContacts);


    return (
        <ul className="list-group">
            {elements}
        </ul>
    )
}

export default ContactsList;