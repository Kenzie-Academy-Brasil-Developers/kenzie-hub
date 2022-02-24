import {Container, Form} from './style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from './../../assets/Logo.svg'
import {useHistory} from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import KenzieHub from './../../services/api'
import { toast } from 'react-toastify'

const Singup = () => {

    const [selectIn, setSelect] = useState('')

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required('Campo Obrigatorio'),
        email: yup.string().email('Email invalido').required('Campo obrigatorio'),
        password: yup.string().required('Campo obrigatorio'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senha diferentes').required('Campo obrigatorio'),
        contact: yup.string().required('Campo Obrigatorio'),
        bio: yup.string().required('Campo obrigatorio'),      
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        delete data.confirmPassword
        data.course_module = selectIn
        
        const response = await KenzieHub.post('/users', data)
        .then((_) => {
            toast.success('Conta criada com sucesso')
            history.push('/')
        })
        .catch((_) => {
           toast.error('Algo deu errado')
        })
        
        return response
        
    }

    return (
        <Container>   
            <div>
                <img src={Logo} alt="Kenzie Hub" />
                <Button onClick={() => history.push('/')} width="60px" backgroundColor='#343b41' hover='#868e96'>Voltar</Button>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}> 
                <h1>Crie sua conta</h1>
                <span>Rápido e gratis, vamos nessa</span>
                <Input label='Nome' register={register} name='name' error={errors.name?.message}/>
                <Input label='Email' register={register} name='email' error={errors.email?.message}/>
                <Input label='Senha' register={register} name='password' error={errors.password?.message}/>
                <Input label='Confirmar senha' register={register} name='confirmPassword' error={errors.confirmPassword?.message}/>
                <Input label='Contato' register={register} name='contact' error={errors.contact?.message}/>  
                <Input label='Bio' register={register} name='bio' error={errors.bio?.message}/>  
                <label>Selecionar Modulo</label>
                <select onChange={(e) => {setSelect(e.currentTarget.value)}}>
                    <option defaultValue="" disabled selected>Selecione...</option>
                    <option value="Primeiro-Modulo (FrontEnd basico)">Primeiro modulo</option>
                    <option value="Segundo-Modulo (FrontEnd intermediario)"> Segundo modulo </option>
                    <option value="Terceiro módulo (Introdução ao Backend)"> Terceiro modulo </option>
                    <option value="Quarto módulo (Backend Avançado)"> Quarto modulo </option>
                </select>        
                <Button type='submit' 
                backgroundColor="#59323f" 
                > Cadastrar </Button>
            </Form>
        </Container>
    )
}

export default Singup