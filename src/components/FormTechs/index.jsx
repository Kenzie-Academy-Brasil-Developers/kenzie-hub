import { Container, Form, SelectContainer } from './style'
import Input from '../Input'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button';

const FormTechs = () => {

    const schema = yup.object().shape({
        email: yup.string().email('Email invalido').required('Campo obrigatorio'),
        password: yup.string().required('Campo obrigatorio'),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data)

    return (
       <Container>
           <div>
            <h1>Cadastrar Tecnologia</h1>
           </div>
           <Form onSubmit={handleSubmit(onSubmit)}>
             <Input label='Nome' register={register} name='email' error={errors.email?.message}/>  
             <SelectContainer>     
             <label>Selecionar status</label>  
                <select>
                    <option selected disabled>Selecione...</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediario">Intermediario</option>
                    <option value="Avançado">Avançado</option>
                </select>
            </SelectContainer>
             <Button type='button' 
                backgroundColor="#FF577f" 
                isRegister={true}
                > Cadastrar tecnologia </Button>
           </Form>

       </Container>
    )
}

export default FormTechs