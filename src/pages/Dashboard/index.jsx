import Navbar from "../../components/Navbar"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Main from "../../components/Main"
import { Redirect, useHistory } from "react-router-dom"

const Dashboard = ({auth, setAuth}) => {

  const history = useHistory()

  if (!auth) {
    return <Redirect to='/'/>
  }

  const Logout = () => {
    localStorage.clear()
    setAuth(false)
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