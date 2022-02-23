import {Container, Form} from './style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from './../../assets/Logo.svg'
// import {useHistory} from 'react-router-dom'

const Singup = () => {

    // const history = useHistory()

    return (
        <Container>    
            <img src={Logo} alt="Kenzie Hub" />
            <Form> 
                <h1>Crie sua conta</h1>
                <span>Rápido e gratis, vamos nessa</span>
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />           
                <Button type='button' 
                backgroundColor="#59323f" 
                > Cadastrar </Button>
            </Form>
        </Container>
    )
}

export default Singup