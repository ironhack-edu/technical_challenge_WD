import axios from "axios"

class PhoneService {
	constructor() {
		this.api = axios.create({
			baseURL: `${process.env.REACT_APP_API_URL}/phones`,
		})
	}

	getAllPhones() {
		return this.api.get("")
	}

	getOnePhone(phone_id) {
		return this.api.get(`/${phone_id}`)
	}
}

const phoneServices = new PhoneService()

export default phoneServices
