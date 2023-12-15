import axios from "axios"

 class PhoneService {
     constructor() {
         this.api = axios.create({
             baseURL: "http://localhost:5005/api/"
         })
     }

     getAll() {
         return this.api.get("/phones")
     }
 }

 const phoneServices = new PhoneService()
 export default phoneServices