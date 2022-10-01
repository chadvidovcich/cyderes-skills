process.env.NODE_ENV = "TEST"

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

// Use chai-http plugin
chai.use(chaiHttp)
chai.should()
const expect  = require('chai').expect

describe('Server Main Route', () => {
    // GET request on base route
    it('GET "/" should redirect', (done) => {
        chai.request(server)
            .get('/').redirects(0)
            .end((err, res) => {
                res.should.redirectTo('/api/')
                done();
            })
    })

    // GET request on /api/ route
    it('GET "/api/" should return landing page', (done) => {
        chai.request(server)
            .get('/api/')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.be.html;
                expect(res.text).to.include('Cyderes Skills Assessment');
                done();
            })
    })

    // GET request on non established route
    it('GET incorrect URL should fail', (done) => {
        chai.request(server)
            .get('/apis')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    // GET request on /api/ route with query
    it('GET "/api/google.com" should return JSON', (done) => {
        chai.request(server)
            .get('/api/google.com')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.be.json;
                expect(res.text).to.include('Google LLC');
                done();
            })
    })

    // GET request on /api/ route with incorrect query should fail
    it('GET incorrect domain query should return JSON error', (done) => {
        chai.request(server)
            .get('/api/helloWorld')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.be.json;
                expect(res.text).to.include('is an invalid domain name');
                done();
            })
    })
})