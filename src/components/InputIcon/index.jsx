import { Container, InputContainer } from './style'
import ButtonIcon from '../ButtonIcon';
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'

const Input = ({label, name, error, register, setShowPassword, showPassword,...rest}) => {

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Container> 
            <label>{label} {!!error && <span> - {error}</span>} </label>
            <InputContainer>
                <input {...register(name)} {...rest}/>
                <ButtonIcon 
                color='#868e96'
                heigth='22px'
                icon={showPassword ? BsFillEyeSlashFill : BsFillEyeFill} 
                type='button'
                onClick={() => togglePassword()}/>
            </InputContainer>
            
        </Container>    
    )
}
export default Input