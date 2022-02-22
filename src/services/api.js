import axios from 'axios'

const KenzieHub = axios.create({
    baseURL: "https://kenziehub.herokuapp.com"
})

export default KenzieHub