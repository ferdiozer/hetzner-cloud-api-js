
const axios = require("axios")

// Get all Images
const images =(APIKEY)=>{
    const url = "https://api.hetzner.cloud/v1/images"
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    return axios.get(url,{headers:header})
}

// Get an Image
const image =(APIKEY,id)=>{
    const url = `https://api.hetzner.cloud/v1/images/${id}`
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    return axios.get(url,{headers:header})
}
// Update an Image
const updateImage =(APIKEY,id,updateData)=>{
    const url = `https://api.hetzner.cloud/v1/images/${id}`
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    return axios.put(url,updateData,{headers:header})
}
//Delete an Image
const deleteImage =(APIKEY,id)=>{
    const url = `https://api.hetzner.cloud/v1/images/${id}`
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    return axios.delete(url,{headers:header})
}

module.exports ={
    images,
    image,
    updateImage,
    deleteImage
}