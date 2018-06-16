let Pet = require('../models/pets');
let url = "http://localhost:3000";
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

describe('Pets', () => {
    beforeEach((done) => {
        Pet.remove({}, (err) => {
            done();
        });
    });
    describe('/GET pets', () => {
        it('it should GET all pets', (done) => {
            chai.request(url)
            .get('/pets')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });
    describe('/POST pet', () => {
        it('it should not POST a pet without name field', (done) => {
            let pet = {
                tag: "Tag nuevo"
            }
            chai.request(url)
                .post('/pets')
                .send(pet)                
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code');
                    done();
                });
        });
        it('it should POST a pet ', (done) => {
            let pet = {
                name: "Perrito",
                tag: "Frenchie"
            }
            chai.request(url)
                .post('/pets')
                .send(pet)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
    describe('/GET/:id pet', () => {
        it('it should GET a pet by id', (done) => {
            let pet = new Pet({ name: "Laika", tag: "From Russia with love" });
            pet.save((err, pet) => {
                chai.request(url)
                    .get('/pets/' + pet._id)
                    .send(pet)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('tag');
                        done();
                    });
            });

        });
    });
    describe('/PUT/:id pet', () => {
        it('it should UPDATE a pet given the id', (done) => {
            let pet = new Pet({name: "Laika", tag: "Otro tag"})
            pet.save((err, pet) => {
                chai.request(url)
                    .put('/pets/' + pet._id)
                    .send({
                        name: "Laika 2"
                    })
                    .end((err, res) => {                        
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name').eql('Laika 2');
                        done();
                    });
            });
        });
    });
    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id pet', () => {
        it('it should DELETE a pet given the id', (done) => {
            let pet = new Pet({name: "Laika", tag: "Otro tag"})
            pet.save((err, pet) => {
                chai.request(url)
                    .delete('/pets/' + pet._id)
                    .end((err, res) => {
                        res.should.have.status(204);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
});