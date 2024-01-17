import { List } from 'components/styled/style'
import ContactsListItem from './ContactsListItem'

import { useSelector } from 'react-redux'

const ContactList = () => {

    const { contacts } = useSelector((state) => state.contacts)
    const { filter } = useSelector((state) => state.filter)
 
    const listOfFilteredContacts = contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
 
    return (
        <List>
            <ContactsListItem contacts={filter ? listOfFilteredContacts : contacts} />    
        </List>
    )
}

export default ContactList