import axios from 'axios'
import api from '../api.conf'

const Api = () => {
    return {
        default: async () => {
            let employee = []
            try {
              const response = await axios.get(`${api.url}?manager=0`)
              return response.data || employee
            } catch (error) {
              console.error(error.toString())
            }
            return employee
          },
        getManager: async employee => {
            let employees = []
            try {
                const response = await axios.get(`${api.url}?manager=${employee}`) 
                return response.data || employees
            } catch ( error ) {
                console.error(error.toString())
            }
        },
        getByIds: async employee => {
          // id=3&id=4&id=5 
          let employees = []
            try {
                const response = await axios.get(`${api.url}?id=${employee}`) 
                return response.data || employees
            } catch ( error ) {
                console.error(error.toString())
            }
        }

    }
}

export default Api;