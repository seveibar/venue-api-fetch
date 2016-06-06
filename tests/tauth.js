var chai = require("chai");
var expect = chai.expect;
var auth = require("../auth.js");

var domain = "http://127.0.0.1:9000";

describe("Authentication", () => {

  var testUser = {
      name: "jane@jane.com",
      password: "jane"
  };

  it("Should properly authorize user", (done) => {
    auth.getAuthorizationInfo(domain, testUser.name, testUser.password).then((authInfo)=>{
      expect(authInfo).to.not.be.null;
      expect(authInfo.token).to.not.be.null;
      done();
    }).catch((err) => {
      expect.fail(err);
    });
  });
})
