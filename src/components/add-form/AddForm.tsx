import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

import { useDispatch } from 'react-redux';

import { addContacts } from '../../components/contacts-list/contactsSlice';

import './addform.scss';


const EmployeesAddForm = () => {

    const [contName, setContName] = useState('');
    const [contNumber, setContNumber] = useState('');
    const [contSername, setContSername] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newContacts = {
            id: v4(),
            name: contName,
            sername: contSername,
            number: contNumber,
        };

        dispatch(addContacts(newContacts));

        setContName('');
        setContSername('');
        setContNumber('');
    };


    return (
        <div className="app-add-form">
            <h3>Добавьте новойы контакт</h3>
            <form className="add-form" onSubmit={onSubmit}>
                <input type="text"
                    id="name"
                    className="form-control new-post-label"
                    placeholder="Введите имя контакта"
                    name="name"
                    maxLength={15}
                    required
                    value={contName}
                    onChange={(e) => setContName(e.target.value)} />
                
                <input type="text"
                    id="sername"
                    className="form-control new-post-label"
                    placeholder="Введите фамилию контакта"
                    name="sername"
                    maxLength={15}
                    required
                    value={contSername}
                    onChange={(e) => setContSername(e.target.value)} />

                <input type="string"
                    id="number"
                    className="form-control new-post-label"
                    placeholder="Введите номер телефона"
                    name="number"
                    maxLength={12}
                    required
                    value={contNumber}
                    onChange={(e) => setContNumber(e.target.value)} />

                <button type="submit"
                    className="btn-form">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;