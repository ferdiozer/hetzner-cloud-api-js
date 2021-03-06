
const axios = require("axios")

const {APIKEY} = require("../../config")



// List all Actions
const getActions =()=>{
    const url = "https://api.hetzner.cloud/v1/actions"
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.get(url,{headers:header}).then((res)=>{
        console.log(res.data)
    })
}


/////-------SERVER----///////////////////////////////////////////////////////////////////////////
// Get all servers
const getServers =()=>{
    const url ="https://api.hetzner.cloud/v1/servers"
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.get(url,{headers:header}).then((res)=>{
        console.log(res.data)
    })
}
// Create a Server
const createServer =(obj=null)=>{
    const examplebody = {"name":"my-server-nodejs","server_type":"cx11","start_after_create":true,"image":"ubuntu-20.04","automount":false}
/**
 * REGUIRE FIELDS
 * name, server_type, image
 * 
 */
    const url = "https://api.hetzner.cloud/v1/servers"
    const header = {
        "Authorization" : `Bearer ${APIKEY}`,
        "Content-Type" : "application/json"
    }
    const body = obj ? obj : examplebody
    axios.post(url,body,{headers:header}).then((res)=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err.message)
    })
}
// Get a Server
const getServer =(id)=>{
    const url = `https://api.hetzner.cloud/v1/servers/${id}`
    const header = {
        "Authorization" : `Bearer ${APIKEY}`,
        "Content-Type" : "application/json"
    }

    axios.get(url,{headers:header}).then((res)=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err.message)
    })
}
// Update a Server
const updateServer =(id,obj)=>{
    const url = `https://api.hetzner.cloud/v1/servers/${id}`
    const header = {
        "Authorization" : `Bearer ${APIKEY}`,
        "Content-Type" : "application/json"
    }

    axios.put(url,obj,{headers:header}).then((res)=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err.message)
    })
}
// Delete a Server
const deleteServer =(id)=>{
    const url = `https://api.hetzner.cloud/v1/servers/${id}`
    const header = {
        "Authorization" : `Bearer ${APIKEY}`,
        "Content-Type" : "application/json"
    }

    axios.delete(url,{headers:header}).then((res)=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err.message)
    })
}
// Get Metrics for a Server ???
const getServerMetrics =(id,query)=>{
    const url = `https://api.hetzner.cloud/v1/servers/${id}/metrics${query}`
    const header = {
        "Authorization" : `Bearer ${APIKEY}`,
        "Content-Type" : "application/json"
    }

    axios.get(url,{headers:header}).then((res)=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err.message)
    })
}
/////-------IMAGE----///////////////////////////////////////////////////////////
// Get all Images
const getImages =()=>{
    const url = "https://api.hetzner.cloud/v1/images"
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.get(url,{headers:header}).then((res)=>{
        console.log(res.data)
    })
}

// Get an Image
const getImage =(id)=>{
    const url = `https://api.hetzner.cloud/v1/images/${id}`
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.get(url,{headers:header}).then((res)=>{
        console.log(res.data)
    })
}
// Update an Image
const updateImage =(id,updateData)=>{
    const url = `https://api.hetzner.cloud/v1/images/${id}`
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.put(url,updateData,{headers:header}).then((res)=>{
        console.log(res.data)
    })
}
//Delete an Image
const deleteImage =(id)=>{
    const url = `https://api.hetzner.cloud/v1/images/${id}`
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.delete(url,{headers:header}).then((res)=>{
        console.log(res.data)
    })
}

///////////----------Image Actions----------------------------------////////////////////////

module.exports = {
    actions:getActions,
    servers : getServers,
    images : getImages,
    image:getImage,
    updateImage,
    deleteImage,
    createServer,
    getServer,
    updateServer,
    deleteServer,
    getServerMetrics,
}