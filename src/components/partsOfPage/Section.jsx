import { SectionStyled } from "components/styled/style"

const Section = ({children}) => {
  return (
    <SectionStyled>
        { children }
    </SectionStyled>
  )
}

export default Section