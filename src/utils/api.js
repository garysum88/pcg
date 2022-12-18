import axios from "axios";

const api = axios.create({
    baseURL: 'https://mailing-list.prototype.mmgrouptech.net/subscribe',
})


export const subscribeNewsletter = (emailObj) => {

  return api.post(``,emailObj)

}

export const addDetails = (email, patchObj) => {

  return api.patch(`/${email}`,patchObj)

}