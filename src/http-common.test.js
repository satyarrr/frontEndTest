var chakram = require('chakram');
expect = chakram.expect;

// describe("API test", function () {
//   it("API test", function () {
//     var response = chakram.get("https://react-testing.free.beeceptor.com");
//     return expect(response).to.have.header("content-type", "application/json");
//   });
// });

describe("Chakram", function() {
  it("should offer simple HTTP request capabilities", function () {
      return chakram.get("https://react-testing.free.beeceptor.com");
  });
});

