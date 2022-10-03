import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../hooks/useHttp';
import {setAuth, setWarning} from '../contacts-list/contactsSlice';

import {ArrayContacts} from '../contacts-list/contactsSlice';

import './auth.scss';


const Auth = () => {

    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');
    
    const {warning} = useSelector((state: ArrayContacts): ArrayContacts => state);

    const dispatch = useDispatch();

    const {request} = useHttp();

    const onSubmit = () => {
        request('http://localhost:3001/auth')
            .then(data => {
                if (data.loggin === log && data.password === pass) {
                    dispatch(setAuth(true));
                    localStorage.setItem('auth', 'true');
                } else {
                    dispatch(setWarning(true));
                }
            })
            .catch(e => console.log(e))
    };


    return (
        <div className='wrapper'>
            <form className='form' action="">
                <h2>Авторизуйтесь</h2>
                <p>Логин - example@gmail.com</p>
                <p>Пароль - qweasd</p>

                <input className='form__log' 
                        type="text" 
                        placeholder='Введите логин' 
                        value={log}
                        onChange={(e) => setLog(e.target.value)} />

                <input className='form__pass' 
                        type="text" 
                        placeholder='Введите пароль'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)} />

                <button className='form__btn' type='button' onClick={onSubmit} >Войти</button>
            </form>
            {
                warning ?
                <div className='warning'>
                Вы ввели неверный логин или пароль, попробуйте снова
                </div>
                : null
            }
        </div>
    );
};

export default Auth;