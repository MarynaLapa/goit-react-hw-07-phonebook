import ContactForm from "./components/partsOfPage/contactForm/ContactForm";
import Filter from "./components/partsOfPage/Filter";
import ContactList from "./components/partsOfPage/ContactList";
import { Title, TitleSection } from "./components/styled/style";
import Section from "./components/partsOfPage/Section";
import Container from "./components/partsOfPage/Container";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "store/Contacts/ThunkContacts";
import { useEffect } from "react";
import { errorSelector, isLoadingSelector } from "store/selectors";


const App = () => {
  
  const dispatch = useDispatch()
  const isLoading = useSelector(isLoadingSelector)
  const error = useSelector(errorSelector)
  
  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])
 
  return (   
    <main>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm />
        </Container>
      </Section>
      <Section>
        <Container>
          <TitleSection>Contacts</TitleSection>
          <Filter title={'Find contacts by name'} />
          {/* {isLoading &&} */}
          {error && <h1>{error}</h1>}
            <ContactList />
        </Container>
      </Section>
    </main>
  )
};

export default App