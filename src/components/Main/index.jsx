import { useState } from "react"
import ButtonIcon from "../ButtonIcon"
import Techs from "../Techs"
import {Container} from './style'
import FormTechs from "../FormTechs"
import {FiPlus} from 'react-icons/fi'
// import FormUpdate from "../FormUpdate"

const Main = () => {

    const [addTechs, setAddTechs] = useState(false)
    const [updateTechs, setUpdateTechs] = useState(false)
    const [user] = useState(JSON.parse(localStorage.getItem('@KenzieHub:user')) || '')
    const [techId, setTechId] = useState('')
    
    const handleTechs = () => {
        setAddTechs(!addTechs)
    } 
    const handleClick = (idTech) => {
        const findTech = user.techs.find(({id}) => id === idTech)
        setTechId(findTech.id)
        setUpdateTechs(!updateTechs)
    }

    return (
        <>
            <Container>
                <section>
                    <h1>Tecnologias</h1>
                    <ButtonIcon 
                    icon={FiPlus} 
                    onClick={() => handleTechs()}
                    background='#212529'
                    />
                </section>
                {addTechs && <FormTechs addTechs={addTechs} setAddTechs={setAddTechs}/>}
                <ul> <Techs handleClick={handleClick} techId={techId}/> </ul>

            </Container>
        </>
    )
}

export default Main