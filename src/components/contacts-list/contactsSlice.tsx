import { createSlice } from "@reduxjs/toolkit";

export interface Contact {
    id: number,
    name: string,
    sername: string,
    number: string
}

export interface ArrayContacts {
    contacts: Array<Contact>;
    query: string;
    edit: boolean;
    idForEdit: number;
    auth: boolean;
    warning: boolean;
}


const initialState: ArrayContacts = {
    contacts: [
        {
            id: 1,
            name: "Алексей",
            sername: 'Иванов',
            number:'8 917 349 58 58',
        },
        {
            id: 2,
            name: "Дмитрий",
            sername: 'Волков',
            number:'8 927 689 42 12',
        },
        {
            id: 3,
            name: "Денис",
            sername: 'Орлов',
            number:'8 937 879 77 21',
        }
    ],
    query: '',
    edit: false,
    idForEdit: 0,
    auth: false,
    warning: false
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: (state, actions) => {
            state.contacts.push(actions.payload);
        },
        deleteContacts: (state, actions) => {
            state.contacts = state.contacts.filter(item => item.id !== actions.payload);
        },
        selectEditContact: (state, actions) => {
            state.idForEdit = actions.payload
        },
        editContact: (state, actions) => {
            state.contacts = actions.payload
        },
        toggleEdit: (state, actions) => {
            state.edit = actions.payload
        },
        getQuery: (state, actions) => {
            state.query = actions.payload;
        },
        setAuth: (state, actions) => {
            state.auth = actions.payload;
        },
        setWarning: (state, action) => {
            state.warning = action.payload
        }
    }
});

const {actions, reducer} = contactsSlice;

export default reducer;
export const {
    addContacts,
    deleteContacts,
    selectEditContact,
    editContact,
    toggleEdit,
    getQuery,
    setAuth,
    setWarning
} = actions;