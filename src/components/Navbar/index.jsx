import Logo from '../../assets/Logo.svg'
import {Container} from './style'

const Navbar = ({children}) => {
    return (
        <Container>
            <section>
                <figure>
                    <img src={Logo} alt="Kenzie Hub" />
                </figure>
                {children}
            </section>
        </Container>
    )
}

export default Navbar