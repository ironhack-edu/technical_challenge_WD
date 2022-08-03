import axios from 'axios'

class PhonesServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`
        })

    }

    getPhones() {
        return this.api.get('/getAllPhones')
    }


    getOnePhone(phone_id) {
        return this.api.get(`/getOnePhone/${phone_id}`)
    }


}

const phonesServices = new PhonesServices()

export default phonesServices