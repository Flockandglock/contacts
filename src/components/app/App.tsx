import {useEffect} from 'react';
import Auth from '../auth/Auth';
import SearchPanel from '../search-panel/SearchPanel';
import ContactsList from '../contacts-list/ContactsList';
import AddForm from '../add-form/AddForm';

import './app.scss';
import { useSelector, useDispatch } from 'react-redux';
import {ArrayContacts, setAuth} from '../contacts-list/contactsSlice';



function App() {

	const {auth} = useSelector((state: ArrayContacts) => state);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setAuth(false));
        localStorage.removeItem('auth');
    };

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(setAuth(true))
        }
    }, [])

	return (
			<div className="app">
				{
					!auth ?
					<Auth />
					: 
					<>
						<div className="search-panel">
							<SearchPanel />
						</div>
						<ContactsList  />
						<AddForm />
                        <button className='logout' onClick={logout} >Выйти</button>
					</>
				}
				
				
			</div>
	);
}

export default App;