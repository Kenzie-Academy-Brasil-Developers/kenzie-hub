import { Container, InputContainer } from './style'

const Input = ({label, name, error, register, ...rest}) => {
    return (
        <Container> 
            <label>{label} {!!error && <span> - {error}</span>} </label>
            <InputContainer>
                <input {...register(name)} {...rest}/>
            </InputContainer>
            
        </Container>    
    )
}
export default Input