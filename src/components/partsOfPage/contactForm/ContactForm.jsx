import { useState } from 'react'
import data from './data.json'
import { FormStyled } from 'components/styled/style'
import Button from 'components/partsOfPage/Button'
import InputWrapper from '../InputWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { contactsSelector, isLoadingSelector } from 'store/selectors'
import { createContactsThunk } from 'store/Contacts/ThunkContacts'


const ContactForm = () => {
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const contacts = useSelector(contactsSelector)

  const dispatch = useDispatch()
  
  const handlerChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name': setName(value)
        break;
      
      case 'number': setNumber(value)
        break;
      
      default:
        return;
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    
    const foundUser = contacts.find(contact =>
      contact.name?.toLowerCase() === e.target.name.value.toLowerCase()
    )
       
    if (foundUser) {
      alert(`${e.target.name.value} is already in contacts`)
      return;
    }
     
    const formData = new FormData(e.currentTarget)
    
    const data = {}
    formData.forEach((value, key) => {
      if (value.length) {
        data[key] = value
      }
    })

    dispatch(createContactsThunk(data))
    
    setName('')
    setNumber('')
  }

  return (
        <FormStyled onSubmit={handlerSubmit}> 
          <InputWrapper
            data={data}
            value={[name, number]}
            onChange={handlerChange}
      />
      
          <Button
            text={'Add contact'}
            type={'submit'}
          />
        </FormStyled>
    )
}
export default ContactForm