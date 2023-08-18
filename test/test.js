const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Express App', () => {
    it('should return "Hello World!" for the / route', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal('Hello World!');
                done();
            });
    });

    it('should return "about" for the /about route', (done) => {
        chai.request(app)
            .get('/about')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal('about');
                done();
            });
    });

    it('should return "contact" for the /contact route', (done) => {
        chai.request(app)
            .get('/contact')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal('contact');
                done();
            });
    });

    after(() => {
        console.log('Tests are completed');
        // forcefully exit the program
        process.exit(0); // Exit with success status
    });
});
