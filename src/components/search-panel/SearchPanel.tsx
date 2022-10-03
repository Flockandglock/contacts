import { getQuery } from '../contacts-list/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {ArrayContacts} from '../contacts-list/contactsSlice'


import './searchpanel.scss';

const SearchPanel = () => {
  
    const {query} = useSelector((state: ArrayContacts) => state);
    const dispatch = useDispatch();
    

    return (
        <div>
            <h3>Поиск контакта</h3>
            <input type="text"
                value={query}
                onChange={e => dispatch(getQuery(e.target.value))}
                className="search-input"
                placeholder="Найти контакт"/>
        </div>
    )
}

export default SearchPanel;