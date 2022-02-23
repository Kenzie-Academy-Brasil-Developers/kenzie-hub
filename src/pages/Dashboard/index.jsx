import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Main from "../../components/Main"

const Dashboard = () => {
    return (
      <>
        <Navbar>
          <Button backgroundColor="#212529" width="65px">Sair</Button>
        </Navbar>
        <Header />
        <Main />
      </>
    )
}

export default Dashboard