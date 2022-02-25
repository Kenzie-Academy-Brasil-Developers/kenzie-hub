import Button from './../Button'
import ButtonIcon from './../ButtonIcon'
import {Container, Form, SelectContainer} from './style'
import {IoCloseOutline} from 'react-icons/io5'
import { useState } from 'react'
import KenzieHub from '../../services/api'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';


const FormUpdate = ({updateTechs, setUpdateTechs, techId}) => {

    const [status, setStatus] = useState('')
    const [token] = useState(localStorage.getItem('@KenzieHub:token') || '')


    const handleUpdate = () => {
        setUpdateTechs(!updateTechs)
    }

    const schema = yup.object().shape({
        title: yup.string()
    })

    const {handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        data.status = status

        const response = KenzieHub.put(`/users/techs/${techId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => toast.success('Status Atualizado'))
        .catch(err => console.log(err))

        return response
    }

    return (    
        <Container>
        <div>
         <h1>Atualizar Tecnologia</h1>
         <ButtonIcon icon={IoCloseOutline} onClick={() => handleUpdate()}/>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SelectContainer>     
          <label>Selecionar status</label>  
             <select onChange={(e) => setStatus(e.currentTarget.value)}>
                 <option selected disabled>Selecione...</option>
                 <option value="Iniciante">Iniciante</option>
                 <option value="Intermediario">Intermediario</option>
                 <option value="Avançado">Avançado</option>
             </select>
         </SelectContainer>
         <div>
          <Button type='submit' 
             backgroundColor="#FF577f" 
             width='250px'
             hover='#FF427F'
             > Salvar Atualizações </Button>
        </div>
        </Form>

    </Container>
    )
}

export default FormUpdate