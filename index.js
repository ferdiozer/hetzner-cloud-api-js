/*
  _____                .___.__                             
  _/ ____\___________  __| _/|__|   ____________ ___________ 
  \   __\/ __ \_  __ \/ __ | |  |  /  _ \___   // __ \_  __ \
   |  | \  ___/|  | \/ /_/ | |  | (  <_> )    /\  ___/|  | \/
   |__|  \___  >__|  \____ | |__|  \____/_____ \\___  >__|   
             \/           \/                  \/    \/       
*/

const axios = require("axios")

class Cloud {
    /**
     * 
     * @param {String} token Your api key
     */
    constructor(token) {
        this.token = token

    }



    /////-------SERVER----///////////////////////////////////////////////////////////////////////////
    // Get all servers
    getServers() {
        const url = "https://api.hetzner.cloud/v1/servers"
        const header = {
            Authorization: `Bearer ${this.token}`
        }
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: header }).then((res) => {
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
        const header = {
            "Authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }
        return new Promise((resolve, reject) => {
            axios.post(url, body, { headers: header }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })

    }
    // Get a Server
    getServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}`
        const header = {
            "Authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: header }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })

    }
    // Update a Server
    updateServer(id, obj) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}`
        const header = {
            "Authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }
        return new Promise((resolve, reject) => {
            axios.put(url, obj, { headers: header }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })

    }
    // Delete a Server
    deleteServer(id) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}`
        const header = {
            "Authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }
        return new Promise((resolve, reject) => {
            axios.delete(url, { headers: header }).then((res) => {
                return resolve(res.data)
            }).catch(err => {
                return reject(err.response)
            })
        })

    }
    // Get Metrics for a Server ???
    getServerMetrics(id, query) {
        const url = `https://api.hetzner.cloud/v1/servers/${id}/metrics${query}`
        const header = {
            "Authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }
        return new Promise((resolve, reject) => {
            axios.get(url, { headers: header }).then((res) => {
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

