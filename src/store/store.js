import { contactsReducer } from "./sliceContacts"
import { filterReducer } from "./sliceFilter";

import { configureStore } from "@reduxjs/toolkit";

const reducer = {
    filter: filterReducer,
    contacts: contactsReducer,
}

 export const store = configureStore({ reducer })