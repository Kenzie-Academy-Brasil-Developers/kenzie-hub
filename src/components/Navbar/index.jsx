import Logo from '../../assets/Logo.svg'
import {Container} from './style'

const Navbar = ({children}) => {
    return (
        <Container>
            <figure>
                <img src={Logo} alt="Kenzie Hub" />
            </figure>
            {children}
        </Container>
    )
}

export default Navbar