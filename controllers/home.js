let path = require('path');
let fetch = require('node-fetch')

module.exports = {
    getIndex: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../views/index.html'))
    },

    getIPInfo: async (req, res) => {
        let searchQuery = req.params.searchQuery

        // Define external API URL
        const whoIsAPI = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.WHOISAPIKEY}&outputFormat=JSON&domainName=${searchQuery}`

        try {
            const response = await fetch(whoIsAPI)
            const json = await response.json()

            res.status(200).send(json)
        } catch (error) {
            console.log(error)
        }
    },
  };