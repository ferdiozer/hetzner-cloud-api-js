/*
  _____                .___.__                             
  _/ ____\___________  __| _/|__|   ____________ ___________ 
  \   __\/ __ \_  __ \/ __ | |  |  /  _ \___   // __ \_  __ \
   |  | \  ___/|  | \/ /_/ | |  | (  <_> )    /\  ___/|  | \/
   |__|  \___  >__|  \____ | |__|  \____/_____ \\___  >__|   
             \/           \/                  \/    \/       
*/

const axios = require("axios")
const Image = require("./src/utils/services/Image")


//import axios from "axios";

class Cloud {
    /**
     * 
     * @param {String} token Your api key
     */
    constructor(token) {
        this.token = token
        this.headerConfig = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }



    /////-------SERVER----///////////////////////////////////////////////////////////////////////////
    // Get all servers
    getServers() {
        const url = "https://api.hetzner.cloud/v1/servers"
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Create a Server
    createServer(body =
        { "name": "my-server-nodejs", "server_type": "cx11", "start_after_create": true, "image": "ubuntu-20.04", "automount": false }
    ) {
        /**
         * REGUIRE FIELDS
         * name, server_type, image
         * 
         */
        const url = "https://api.hetzner.cloud/v1/servers"
        return new Promise((resolve, reject) => {
            axios.post(url, body, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Get a Server
    getServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}`
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Update a Server
    updateServer(id, obj) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}`
        return new Promise((resolve, reject) => {
            axios.put(url, obj, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Delete a Server
    deleteServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}`
        return new Promise((resolve, reject) => {
            axios.delete(url, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Get Metrics for a Server ???
    getServerMetrics(id, query) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}/metrics${query}`
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }

    powerOffServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}/actions/poweroff`
        return new Promise((resolve, reject) => {
            axios.post(url, {}, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }

    powerOnServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}/actions/poweron`
        return new Promise((resolve, reject) => {
            axios.post(url, {}, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }

    rebootServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}/actions/reboot`
        return new Promise((resolve, reject) => {
            axios.post(url, {}, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }

    shutdownServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}/actions/shutdown`
        return new Promise((resolve, reject) => {
            axios.post(url, {}, { headers: this.headerConfig }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }



    /////-------IMAGES----///////////////////////////////////////////////////////////////////////////
    // Get all Images
    images() {
        return new Promise((resolve, reject) => {
            Image.images(this.token).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Get an Image
    image(id) {
        return new Promise((resolve, reject) => {
            Image.image(this.token, id).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Update an Image
    updateImage(id, updateData) {
        return new Promise((resolve, reject) => {
            Image.updateImage(this.token, id, updateData).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }
    // Delete an Image
    deleteImage(id) {
        return new Promise((resolve, reject) => {
            Image.deleteImage(this.token, id).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })
    }


}

module.exports = Cloud

/*
    //deneme amaçlı
     test(params) {
        console.log({params,thisToken:this.token})
    }

const { APIKEY } = require("./config")

const {
    servers,
    images,
    image,
    createServer,
    getServer,
    updateServer,
    deleteServer,
    getServerMetrics,
    actions,
 } = require("./services")


//console.log(APIKEY)

// ubuntu-20.04  // id : 15512617
//image(15512617)
//createServer()
//servers()
//updateServer(7394576,{name:"updated-my-server-nodejs"})
//getServer(7395004)

//deleteServer(7394576)

//getServerMetrics(7395004, "?type=cpu&start=2020-04-23T17:55:14+00:00&end=2020-04-24T17:55:14+00:00")

//actions()

*/


//#region Documentation (hetzner cloud api)
/**
 *
 * https://docs.hetzner.cloud/
 */

