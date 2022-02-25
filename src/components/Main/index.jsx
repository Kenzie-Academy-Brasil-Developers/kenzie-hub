import { useState } from "react"
import ButtonIcon from "../ButtonIcon"
import Techs from "../Techs"
import {Container} from './style'
import FormTechs from "../FormTechs"
import {FiPlus} from 'react-icons/fi'
import FormUpdate from "../FormUpdate"


const Main = () => {

    const [addTechs, setAddTechs] = useState(false)
    const [updateTechs, setUpdateTechs] = useState(false)
    const [techId, setTechId] = useState('') 

    
    const handleTechs = () => {
        setAddTechs(!addTechs)
    } 
    const handleUpdate = () => {
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
                <ul> <Techs 
                handleUpdate={handleUpdate} 
                updateTechs={updateTechs} 
                setUpdateTechs={setUpdateTechs}
                setTechId={setTechId}
                /> </ul>
                {updateTechs && <FormUpdate 
                updateTechs={updateTechs} 
                setUpdateTechs={setUpdateTechs}
                techId={techId}
                />}
            </Container>
        </>
    )
}

export default Main