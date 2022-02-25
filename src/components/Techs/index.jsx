import {LiContainer} from './style'
import KenzieHub from './../../services/api'
import { useState, useEffect } from 'react'
import ButtonIcon from '../ButtonIcon'
import {FaTrash} from 'react-icons/fa'
import {BiPencil} from 'react-icons/bi'
import {toast} from 'react-toastify'

const Techs = ({updateTechs, setUpdateTechs, setTechId}) => {

    
    const [user] = useState(JSON.parse(localStorage.getItem('@KenzieHub:user')) || '')
    const [tech, setTechs] = useState(user.techs)
    const [token] = useState(localStorage.getItem('@KenzieHub:token') || '')


    useEffect(() => {
        const loadTechs = () => {

            const response = KenzieHub.get(`/users/${user.id}`)
            .then(res => setTechs(res.data.techs))
    
            return response 
            
        }
        loadTechs()
    }, [tech])


    const deleteTech = (id) => {
        const removeTech = tech.filter((tech) => tech.id !== id)

        const response = KenzieHub.delete(`/users/techs/${id}`, {
             headers: {
                Authorization: `Bearer ${token}`
            }
          })
        .then((_) => {
            toast.success('Tecnologia deletada')
            setTechs(removeTech)
        })
        .catch(err => console.log(err))

        return response
    }

    const handleClick = (id) => {
        setUpdateTechs(!updateTechs)
        setTechId(id)
    }
    
    return (
        <>
            {tech.map(({title, status, id}) => 
                <LiContainer key={id}>
                <h1>{title}</h1>
                <span>{status}</span>
                <ButtonIcon icon={FaTrash} onClick={() => deleteTech(id)}/>
                <ButtonIcon icon={BiPencil} onClick={() => handleClick(id)}/>
                </LiContainer>
            )}
        </>
    )
}

export default Techs