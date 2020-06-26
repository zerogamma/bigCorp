import axios from 'axios'
import api from '../api.conf'

const Api = () => {
    return {
        default: async () => {
            let employee = []
            try {
              const response = await axios.get(`${api.url}?manager=0`)//offset=5&limit=6
              return response.data || employee
            } catch (error) {
              console.error(error.toString())
            }
            return employee
          },
        getManager: async employee => {
            let employees = []
            try {
                const response = await axios.get(`${api.url}?manager=${employee}`) // id=3&id=4&id=5 
                return response.data || employees
            } catch ( error ) {
                console.error(error.toString())
            }
        }
        //manager=0

    }
}

export default Api;