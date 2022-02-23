import Button from "../../components/Button"
import Input from "../../components/Input"
import {Container, Form} from './style'
import Logo from './../../assets/Logo.svg'
import { useHistory } from "react-router-dom"

const Login = () => {

    const history = useHistory()

    return (
        <Container>    
            <img src={Logo} alt="Kenzie Hub" />
            <Form> 
                <h1>Login</h1>
                <Input />
                <Input />
                <Button type='submit' 
                backgroundColor="#FF577f"
                onClick={()=> history.push('/dashboard')}
                > Login </Button>     
                <span>Ainda não possui uma conta ?</span>         
                <Button type='button' 
                backgroundColor="#868e96" 
                isRegister={true}
                onClick={() => history.push('/signup')}> Cadastre-se </Button>
            </Form>
        </Container>
    )
}

export default Login