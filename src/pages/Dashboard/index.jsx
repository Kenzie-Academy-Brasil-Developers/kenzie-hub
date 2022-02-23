import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Main from "../../components/Main"
import { useHistory } from "react-router-dom"

const Dashboard = () => {

  const history = useHistory()

  const Logout = () => {
    localStorage.clear()
    history.push('/')
  }

    return (
      <>
        <Navbar>
          <Button backgroundColor="#212529" width="65px" onClick={() => Logout()}>Sair</Button>
        </Navbar>
        <Header />
        <Main />
      </>
    )
}

export default Dashboard