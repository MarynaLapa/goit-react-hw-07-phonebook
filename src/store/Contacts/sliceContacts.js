import { createSlice } from '@reduxjs/toolkit'
import { createContactsThunk, getContactsThunk, removeContactThunk } from './ThunkContacts'
import { handlerFulfilled, handlerPending, handlerRejected } from './operation'

const initialState = {
        items: [],
        isLoading: false,
        error: '',    
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.items = payload
            })
            .addCase(createContactsThunk.fulfilled, (state, { payload }) => {
                state.items.push(payload)
            })
            .addCase(removeContactThunk.fulfilled, (state, { payload }) => {
                state.items = state.items.find(el => el.id === payload)
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlerPending)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handlerFulfilled)
            .addMatcher((action) => action.type.endsWith('/rejected'), handlerRejected)
            

    }
    
        // removeContact: (state, { payload }) => {
        //         state.contacts = state.contacts.filter((el) => el.id !== payload)
        //     }
    // }
})

export const contactsReducer = contactsSlice.reducer
export const { addContacts, removeContact } = contactsSlice.actions
