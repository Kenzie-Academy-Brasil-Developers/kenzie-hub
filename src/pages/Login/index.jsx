import Button from "../../components/Button"
import Input from "../../components/Input"
import {Container, Form} from './style'
import Logo from './../../assets/Logo.svg'
import { useHistory, Redirect } from "react-router-dom"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import KenzieHub from "../../services/api"
import { toast } from "react-toastify"

const Login = ({auth, setAuth}) => {

    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email('Email invalido').required('Campo obrigatorio'),
        password: yup.string().required('Campo obrigatorio'),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    if (auth) {
        return <Redirect to="/dashboard" />;
      }

    const onSubmit = async (data) => {

        const response = await KenzieHub.post('/sessions', data)
        .then(res => {
            localStorage.setItem('@KenzieHub:token', res.data.token)
            localStorage.setItem('@KenzieHub:user', JSON.stringify(res.data.user))
            toast.success('Login feito com sucesso')
            setAuth(true);
            history.push('/dashboard')
        })
        .catch((_) => {
            toast.error('Email ou senha invalidos')
        })

        return response
    }

    return (
        <Container>    
            <img src={Logo} alt="Kenzie Hub" />
            <Form onSubmit={handleSubmit(onSubmit)}> 
                <h1>Login</h1>
                <Input label='Email' register={register} name='email' error={errors.email?.message}/>
                <Input label='Senha' register={register} name='password' error={errors.password?.message}/>
                <Button type='submit' 
                backgroundColor="#FF577f"
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