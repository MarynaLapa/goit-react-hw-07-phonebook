import { useDispatch } from "react-redux"
import { removeContactThunk } from "store/Contacts/ThunkContacts"
import Button from "./Button"

const ContactsListItem = ({ contacts }) => {

       const dispatch = useDispatch()

   return (
    <>
        {contacts.map(contact => (
            <li key={contact.id} id={contact.id}>
                <span>{contact.name +': '+ contact.number}</span>
                <Button type='button' text={"Delete"}
                    onClick={() => dispatch(removeContactThunk(contact.id))}
                />  
            </li>))
        }
    </>
  )
}

export default ContactsListItem