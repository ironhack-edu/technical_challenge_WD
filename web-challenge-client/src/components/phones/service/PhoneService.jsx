import React from 'react'
import axios from 'axios'

export default class PhoneService {
    constructor(){
        let service = axios.create({
            baseURL: "http://localhost:5005/phones",
        })

        this.service = service;
    }

    getAllPhones(){
        return this.service.get("/").then((resp) => {
            console.log({phones: resp.data})
            return resp.data.data;
        })
    }

    getPhoneDetails(id){
        return this.service.get(`/${id}`).then((resp) => {
            console.log({phone: resp.data})
            return resp.data.data;
        })
    }

}
