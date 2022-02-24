import Routes from "./routes/routes";
import GlobalStyle from './styles/global'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
      <ToastContainer style={{ width: "250px" }}/>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
