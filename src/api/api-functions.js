import axios from 'axios'
import api from '../api.conf'
import _ from 'lodash'

const Api = () => {
    return {
        default: async () => {
            let employee = []
            try {
              const response = await axios.get(`${api.url}`)
              return response.data.results || employee
            } catch (error) {
              console.error(error.toString())
            }
            return employee
          },
        search: async employee => {
            let employees = []
            try {
                const response = await axios.get(`${api.url}?${encodeURIComponent(employee)}`) // id=3&id=4&id=5 
                return response.data.results || employees
            } catch ( error ) {
                console.error(error.toString())
            }
        }
        //manager=0

    }
}

export default Api;