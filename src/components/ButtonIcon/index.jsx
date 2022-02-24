import { Container } from "./style";

const ButtonIcon = ({ icon: Icon, background = "transparent", color = '#F8F9FA',heigth = '35px', ...rest}) => {

  return (
    <Container {...rest} background={background} color={color} heigth={heigth}>
      <Icon />
    </Container>
  );
};

export default ButtonIcon;