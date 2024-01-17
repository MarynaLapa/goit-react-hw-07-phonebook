
const Input = ({ htmlFor, label, id, type, name, value, onChange, placeholder}) => {
    
    return (
        <>
            <label htmlFor={htmlFor}>{label}</label>
            <input id={id} 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </>
    )
}

export default Input