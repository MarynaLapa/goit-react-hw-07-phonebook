import ContactForm from "./components/partsOfPage/contactForm/ContactForm";
import Filter from "./components/partsOfPage/Filter";
import ContactList from "./components/partsOfPage/ContactList";
import { Title, TitleSection } from "./components/styled/style";
import Section from "./components/partsOfPage/Section";
import Container from "./components/partsOfPage/Container";

const App = () => {
  
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
          
            <ContactList />
        </Container>
      </Section>
    </main>
  )
};

export default App