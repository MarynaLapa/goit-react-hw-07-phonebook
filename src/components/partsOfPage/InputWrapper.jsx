import { Container, InputContainer } from 'components/styled/style'
import Input from './Input'


const InputWrapper = ({ data, value, onChange }) => {
    
    return (
        <Container>
            {data.map((el, i) => (
                <InputContainer key={el.name}>
                    <Input
                        htmlFor={el.name}
                        label={el.name}
                        id={el.name}
                        type={el.type}
                        name={el.name}
                        value={value[i]}
                        onChange={onChange}
                    />
                </InputContainer>
            ))}
        </Container>
    )  
}

export default InputWrapper