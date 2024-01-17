import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
}
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: {
            prepare: (data) => {
                const newContact = {
                    ...data,
                    id: nanoid(),
                }
                return { payload: newContact }
            },
            reducer:  (state, { payload }) => {
                state.contacts.push(payload)
            }, 
        },
        removeContact: (state, { payload }) => {
                state.contacts = state.contacts.filter((el) => el.id !== payload)
            }
    }
})

export const contactsReducer = contactsSlice.reducer
export const { addContacts, removeContact } = contactsSlice.actions
