
const axios = require("axios")

const {APIKEY} = require("./config")


const serverListApiUrl = "https://api.hetzner.cloud/v1/servers"


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
    const header = {
        Authorization : `Bearer ${APIKEY}`
    }
    axios.get(serverListApiUrl,{headers:header}).then((res)=>{
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
    const header = {
        "Authorization" : `Bearer ${APIKEY}`,
        "Content-Type" : "application/json"
    }
    const body = obj ? obj : examplebody
    axios.post(serverListApiUrl,body,{headers:header}).then((res)=>{
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

module.exports = {
    actions:getActions,
    servers : getServers,
    images : getImages,
    image:getImage,
    createServer,
    getServer,
    updateServer,
    deleteServer,
    getServerMetrics,
}