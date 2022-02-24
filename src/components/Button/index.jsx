import { Container } from './style'

const Button = ({children, backgroundColor = '#FF577f', width = '80%', hover = '#FF427F',...rest}) => {
    return (
        <Container {...rest} backgroundColor={backgroundColor} width={width} hover={hover}> 
            {children}
        </Container>
    )
}

export default Button