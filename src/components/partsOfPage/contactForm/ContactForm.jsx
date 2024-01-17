import { useState } from 'react'
import data from './data.json'
import { FormStyled } from 'components/styled/style'
import Button from 'components/partsOfPage/Button'
import InputWrapper from '../InputWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { addContacts } from 'store/sliceContacts'

const ContactForm = () => {
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const { contacts } = useSelector((state) => state.contacts)
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
     
    dispatch(addContacts({name: e.target.name.value, number: e.target.number.value}))
    
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