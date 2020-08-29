


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

getServerMetrics(7395004, "?type=cpu&start=2020-04-23T17:55:14+00:00&end=2020-04-24T17:55:14+00:00")

actions()


//#region Documentation (hetzner cloud api)
/**
 *
 * https://docs.hetzner.cloud/
 */