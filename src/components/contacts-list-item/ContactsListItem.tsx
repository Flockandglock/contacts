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


{/* <span className="list-group-item-label" data-toggle='rise' onClick={onToggleProp}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${number} $`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " data-toggle='increase' onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm " onClick={removeEmpl} >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div> */}