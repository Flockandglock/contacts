import {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Contact, ArrayContacts, editContact, toggleEdit } from '../contacts-list/contactsSlice';

import './contactpanel.scss';



const ContactPanel = () => {

    const {idForEdit, contacts} = useSelector((state: ArrayContacts) => state)

    const [contName, setContName] = useState('');
    const [contNumber, setContNumber] = useState('');
    const [contSername, setContSername] = useState('');

    const dispatch = useDispatch();

    const onEdit = (id: number, prop: Omit<Contact, 'id'>) => {
        
        const editCont = (conts: Array<Contact>) => {
            return conts.map(item => 
                item.id === id 
                ?
                {
                    ...item,
                    name: prop.name,
                    sername: prop.sername,
                    number: prop.number,
                }
                : 
                item
            )
        }
        const getEditCont = editCont(contacts);
        dispatch(editContact(getEditCont))
    };

    const onEditContact = () => {
    
        const editContact = {
            name: contName,
            sername: contSername,
            number: contNumber,
        };

        onEdit(idForEdit, editContact)
        dispatch(toggleEdit(false))

        setContName('');
        setContSername('');
        setContNumber('');
    };

    const comeBack = () => {
        dispatch(toggleEdit(false))
    };


    return (
        <li className='list-item'>
             <input type="text"
                    id="name"
                    placeholder="Введите новое  имя контакта"
                    className='edit-nput'
                    name="name"
                    maxLength={15}
                    required
                    value={contName}
                    onChange={(e) => setContName(e.target.value)} />
                
                <input type="text"
                    id="sername"
                    placeholder="Введите новую фамилию контакта"
                    className='edit-nput'
                    name="sername"
                    maxLength={15}
                    required
                    value={contSername}
                    onChange={(e) => setContSername(e.target.value)} />

                <input type="string"
                    id="number"
                    placeholder="Введите новый номер телефона"
                    className='edit-nput'
                    name="number"
                    maxLength={12}
                    required
                    value={contNumber}
                    onChange={(e) => setContNumber(e.target.value)} />

                <button type="button"
                    className="btn-back" onClick={comeBack}>Назад</button>
                <button type="button"
                    className="btn-form" onClick={onEditContact}>Изменить</button>
        </li>
    );
};

export default ContactPanel;