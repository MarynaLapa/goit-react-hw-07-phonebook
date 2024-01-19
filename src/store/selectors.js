import { createSelector } from "@reduxjs/toolkit"

export const contactsSelector = (state) => state.contacts.items
export const isLoadingSelector = (state) => state.contacts.isLoading
export const errorSelector = (state) => state.contacts.error

export const filterSelector = (state) => state.filter.filter
export const filterListSelector = createSelector(contactsSelector, filterSelector, (items, filter) => {
    return items.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
})

