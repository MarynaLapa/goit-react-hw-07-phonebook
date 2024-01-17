import { useDispatch } from "react-redux"
import { removeContact } from "store/sliceContacts"
import Button from "./Button"

const ContactsListItem = ({ contacts, onClick }) => {

       const dispatch = useDispatch()

   return (
    <>
        {contacts.map(contact => (
            <li key={contact.id} id={contact.id}>
                <span>{contact.name +': '+ contact.number}</span>
                <Button type='button' text={"Delete"}
                    onClick={() => dispatch(removeContact(contact.id))}
                />  
            </li>))
        }
    </>
  )
}

export default ContactsListItem