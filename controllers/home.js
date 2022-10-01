const path = require('path');
const fetch = require('node-fetch')

module.exports = {
    forwardIndex: (req, res) => {
        try {
            res.redirect('/api/')
        } catch (error) {
            console.log(error)
        }
    },

    getIndex: (req, res) => {
        try {
            res.status(200).sendFile(path.join(__dirname, '../views/index.html'))
        } catch (error) {
            console.log(error)
        }
    },

    getIPInfo: async (req, res) => {
        const searchQuery = req.params.searchQuery

        // Define external API URL
        const WHO_IS_API = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.WHOISAPIKEY}&outputFormat=JSON&domainName=${searchQuery}`

        try {
            const apiResponse = await fetch(WHO_IS_API)
            res.status(200).send(apiResponse)
        } catch (error) {
            console.log(error)
        }
    },
  };