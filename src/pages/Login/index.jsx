import Button from "../../components/Button"
import Input from "../../components/Input"
import InputIcon from "../../components/InputIcon"
import {Container, Form} from './style'
import Logo from './../../assets/Logo.svg'
import { useHistory, Redirect } from "react-router-dom"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import KenzieHub from "../../services/api"
import { toast } from "react-toastify"
import {useState} from 'react'


const Login = ({auth, setAuth}) => {

    const [showPassword, setShowPassword] = useState(false)


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
                <InputIcon 
                label='Senha'  
                type = {showPassword ? 'text' : 'password'}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                register={register} 
                name='password' 
                error={errors.password?.message} 
                />
                <Button type='submit' 
                backgroundColor="#FF577f"
                > Login </Button>     
                <span>Ainda não possui uma conta ?</span>         
                <Button type='button' 
                backgroundColor="#868e96" 
                hover="#343b41"
                isRegister={true}
                onClick={() => history.push('/signup')}> Cadastre-se </Button>
            </Form>
        </Container>
    )
}

export default Login