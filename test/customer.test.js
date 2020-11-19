var assert = require('assert');
const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;
chai.use(chaiHttp);

describe("test it can create customer", () => {  
    it("create customer", done => {
      chai
        .request("http://localhost:3000")
        .post("/api/customer/create")
        .send({ name: "abdallah", email:"admin@admin.com",mobile:"01097926239" })
        .end((err, res) => {
          expect(res).to.have.status(200);
        //   expect(res).to.have.key("body")
          done();
        });
    });
  });
  