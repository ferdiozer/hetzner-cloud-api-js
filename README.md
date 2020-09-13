# What is this?

API to manage your server with node js


## How to use

# Create Account
https://hetzner.cloud/?ref=Fm9TTCZkqtj1


# How do i get the key?
https://console.hetzner.cloud/projects/"your project id"/security/tokens
->GENERATE API TOKEN this your API KEY

# Installation

`npm i hetzner-cloud-api --save`

Then...

```
const Cloud = require('hetzner-cloud-api');
const client = new Cloud("your API KEY");

//example <promise>
client.getServers().then(servers=>{
    console.log(servers)
}).catch(err=>{
    console.log(err)
})
```

# Functions
## Server
getServers, createServer, getServer, updateServer, deleteServer, getServerMetrics
## Image
images, image, updateImage, deleteImage



# Your questions and support
Documentation
https://docs.hetzner.cloud
<br/>
E-mail
info@ferdiozer.com