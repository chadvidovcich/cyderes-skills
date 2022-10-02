module.exports = {
    checkQuery: function (req, res, next) {
        // check if letter exists in query. This would be a domain.
        if (/[a-zA-Z]+/.test(req.params.searchQuery)) {
            next()
        } else {
            // check for proper IP address
            if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(req.params.searchQuery)) {  
                return next()
            }
            res.send('You have entered an invalid IP address!')
        }
    }
}