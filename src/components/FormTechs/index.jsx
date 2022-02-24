import { Container, Form, SelectContainer } from './style'
import Input from '../Input'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button';
import {useState} from 'react'
import KenzieHub from '../../services/api';
import { toast } from 'react-toastify';
import ButtonIcon from '../ButtonIcon';
import {IoCloseOutline} from 'react-icons/io5'

const FormTechs = ({addTechs, setAddTechs}) => {

    const [status, setStatus] = useState('')
    const [token] = useState(localStorage.getItem('@KenzieHub:token') || '')
    
    
    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatorio'),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        data.status = status

        const response = KenzieHub.post('/users/techs', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => toast.success('Tecnologia cadastrada'))
        .catch((_) => toast.error('Algo deu errado'))
        return response
    }
    const handleTechs = () => {
        setAddTechs(!addTechs)
    } 

    return (
       <Container>
           <div>
            <h1>Cadastrar Tecnologia</h1>
            <ButtonIcon icon={IoCloseOutline} onClick={() => handleTechs()}/>
           </div>
           <Form onSubmit={handleSubmit(onSubmit)}>
             <Input label='Nome' register={register} name='title' error={errors.title?.message}/>  
             <SelectContainer>     
             <label>Selecionar status</label>  
                <select onChange={(e) => setStatus(e.currentTarget.value)}>
                    <option selected disabled>Selecione...</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediario">Intermediario</option>
                    <option value="Avançado">Avançado</option>
                </select>
            </SelectContainer>
             <Button type='submit' 
                backgroundColor="#FF577f" 
                isRegister={true}
                > Cadastrar tecnologia </Button>
           </Form>

       </Container>
    )
}

export default FormTechs