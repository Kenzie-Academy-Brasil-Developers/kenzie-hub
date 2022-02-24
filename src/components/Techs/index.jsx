import {LiContainer} from './style'
import KenzieHub from './../../services/api'
import { useState, useEffect } from 'react'

const Techs = () => {

    const [techs, setTechs] = useState([])
    const [user] = useState(JSON.parse(localStorage.getItem('@KenzieHub:user')) || '')


    const loadTechs = () => {

        const response = KenzieHub.get(`/users/${user.id}`)
        .then(res => setTechs(res.data.techs))

        return response 

    }
    useEffect(() => {
        loadTechs()
    }, [techs])

    return (
        <>
            {techs.map(({title, status}) => 
                <LiContainer>
                <h1>{title}</h1>
                <span>{status}</span>
            </LiContainer>
            )}
        </>
    )
}

export default Techs