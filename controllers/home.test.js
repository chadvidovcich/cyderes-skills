const chai = require('chai')
const chaiHttp = require('chai-http')
const { cyderes_api } = require('../index')

// Use chai-http plugin
chai.use(chaiHttp)
chai.should()
const expect  = require('chai').expect

// Do not use arrow function. this.timout() requires standard function declaration.
describe('Server Main Routes', function () {

    // All tests will timeout after this time
    this.timeout(1000)

    describe('"/" Route', () => {

        it('GET should redirect', (done) => {
            chai.request(cyderes_api)
                .get('/').redirects(0)
                .end((err, res) => {
                    res.should.redirectTo('/api/')
                    done()
                })
        })

        it('POST should fail', (done) => {
            chai.request(cyderes_api)
                .post('/')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

        it('PUT should fail', (done) => {
            chai.request(cyderes_api)
                .put('/')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

        it('DELETE should fail', (done) => {
            chai.request(cyderes_api)
                .delete('/')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
    })

    describe('"/api/" Route', () => {

        it('GET should return landing page', (done) => {
            chai.request(cyderes_api)
                .get('/api/')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res).to.be.html
                    expect(res.text).to.include('Cyderes Skills Assessment')
                    done()
                })
        })
        
        it('GET incorrect URL should fail', (done) => {
            chai.request(cyderes_api)
                .get('/apis')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

        it('POST should fail', (done) => {
            chai.request(cyderes_api)
                .post('/api/')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

        it('PUT should fail', (done) => {
            chai.request(cyderes_api)
                .put('/api/')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
        it('DELETE should fail', (done) => {
            chai.request(cyderes_api)
                .post('/api/')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

    })

    describe('Query Route', () => {

        it('GET query "google.com" should return JSON', (done) => {
            chai.request(cyderes_api)
                .get('/api/google.com')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res).to.be.json
                    expect(res.text).to.include('Google LLC')
                    done()
                })
        })

        it('GET query "69.63.176.13" should return JSON', (done) => {
            chai.request(cyderes_api)
                .get('/api/69.63.176.13')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res).to.be.json
                    expect(res.text).to.include('Facebook, Inc')
                    done()
                })
        })

        it('GET incorrect domain query should return JSON error', (done) => {
            chai.request(cyderes_api)
                .get('/api/helloWorld')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res).to.be.json
                    expect(res.text).to.include('is an invalid domain name')
                    done()
                })
        })

        it('GET incorrect IP address query should return error page', (done) => {
            chai.request(cyderes_api)
                .get('/api/9999.63.176.13')
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res).to.be.html
                    expect(res.text).to.include('invalid IP address')
                    done()
                })
        })

        it('POST "/api/google.com" should fail', (done) => {
            chai.request(cyderes_api)
                .post('/api/google.com')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })

        it('PUT "/api/google.com" should fail', (done) => {
            chai.request(cyderes_api)
                .put('/api/google.com')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
        it('DELETE "/api/google.com" should fail', (done) => {
            chai.request(cyderes_api)
                .delete('/api/google.com')
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
    })

})