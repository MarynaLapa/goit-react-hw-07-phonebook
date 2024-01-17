import { api } from "./api";

export const getAllContacts = async () => {
        const response = await api('/contacts')
    return response 
}
