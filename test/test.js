// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("root",() => {

    describe("GET /", () =>{
        it("should return hello",(done) =>{
            chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
             }); //end of end
        })// end of it
    }) // end of describe GET
}) // end of describe root
describe("Students", () => {
  //get
    describe("GET /students", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .get('/students')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  }); //end of end
        
    }); //end of it should
  }); // end of describe
  //post
  describe("Post /students", ()=>{
    it("should add a student", (done)=>{
       
        const data = { student : {
                
                    
            name: 'Fred Bloggs',
            age: 36,
          
    }};
        chai.request(app)
        .post('/students/create/')
        .set('content-type', 'application/json')
        .send({data})
        .end((err, res) =>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body);
            
            if (err) {
                done(err);
            } else {
                done();
            }
            
            



        });
   

    });
    it("should throw an error when the name is empty",(done)=>{
        const data = { student: {
            name: '',
            age: 26
        }};

        chai.request(app)
        .post('/students/create/')
        .set('content-type', 'application/json')
        .send({data})
        .end((err,res) =>{
            res.should.have.status(422);
            done();
        });


    })
    it("should throw an error when the age is out of range",(done)=>{
        const data = { student: {
            name: 'Jane Eyre',
            age: 12
        }};

        chai.request(app)
        .post('/students/create/')
        .set('content-type', 'application/json')
        .send({data})
        .end((err,res) =>{
            res.should.have.status(422);
            done();
        });


    })
}); // end of describe Post

});
