import axios from 'axios'

class PhoneServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })
    }


    getAllPhones() {
        return this.api.get('/phones')
    }

    getOneDetails(id) {
        return this.api.get(`/phones/${id}`)
    }


}

const phonesServices = new PhoneServices()

export default phonesServices