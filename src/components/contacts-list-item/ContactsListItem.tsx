import { ReactNode } from "react";
import { Contact } from '../contacts-list/contactsSlice';

import './contactslistitem.scss';


interface ContactItem extends Contact {
    removeContact: () => void;
    selectIdForEdit: () => void;
}

const ContactsListItem = ({ name, sername, number, removeContact, selectIdForEdit }: Omit<ContactItem, 'id'>) => {


    return (
        <li className='list-item'>
            <span className="list-item__name">{name} {sername}</span>
            <span className="list-item__number">{number}</span>
            <button type="button"
                className="btn-edit" onClick={selectIdForEdit} >
                Изменить
            </button>
            <button type="button"
                className="btn-delete" onClick={removeContact} >
                Удалить
            </button>
        </li>
    )
}

export default ContactsListItem;


