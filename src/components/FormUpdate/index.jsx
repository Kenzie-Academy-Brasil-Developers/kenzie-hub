// import Button from './../Button'
// import ButtonIcon from './../ButtonIcon'
// import {Container, Form, SelectContainer} from './style'
// import Input from '../Input'
// import {IoCloseOutline} from 'react-icons/io5'
// import { useState } from 'react'
// import KenzieHub from '../../services/api'
// import { toast } from 'react-toastify'
// import * as yup from 'yup'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';


// const FormUpdate = ({techId}) => {

//     const [status, setStatus] = useState('')
//     const [token] = useState(localStorage.getItem('@KenzieHub:token') || '')

//     const schema = yup.object().shape({
//         title: yup.string().required('Campo obrigatorio'),
//     })

//     const {register, handleSubmit, formState:{ errors }} = useForm({
//         resolver: yupResolver(schema)
//     })

//     const updateTech = () => {

//         const response = KenzieHub.delete(`/users/techs/${techId}`,{
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         .then((_) => toast.success('Tecnologia atualizada'))
//         .catch((_) => toast.error('Algo deu errado'))

//         return response
//     }
//     return (    
//         <Container>
//         <div>
//          <h1>Atualizar Tecnologia</h1>
//          <ButtonIcon icon={IoCloseOutline} onClick={() => handleClick()}/>
//         </div>
//         <Form onSubmit={handleSubmit(updateTech)}>
//         <Input label='Nome' register={register} name='title' error={errors.title?.message}/>
//           <SelectContainer>     
//           <label>Selecionar status</label>  
//              <select onChange={(e) => setStatus(e.currentTarget.value)}>
//                  <option selected disabled>Selecione...</option>
//                  <option value="Iniciante">Iniciante</option>
//                  <option value="Intermediario">Intermediario</option>
//                  <option value="Avançado">Avançado</option>
//              </select>
//          </SelectContainer>
//          <div>
//           <Button type='submit' 
//              backgroundColor="#FF577f" 
//              isRegister={true}
//              > Salvar Atualizações </Button>
//             <Button>Excluir</Button>
//         </div>
//         </Form>

//     </Container>
//     )
// }

// export default FormUpdate