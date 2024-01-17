import { AddButton } from "../styled/style";

const Button = ({ text, type, onClick }) => {
    return <AddButton type={type} onClick={onClick}>{text}</AddButton>
}

export default Button;
