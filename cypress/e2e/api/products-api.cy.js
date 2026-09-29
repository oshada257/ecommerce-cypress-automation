describe("API Test Suite", () => {
  // API-001 - GET Single Post
  it("API-001 - Should retrieve a post successfully", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(1);
      expect(response.body).to.have.property("title");
      expect(response.body).to.have.property("body");
      expect(response.body.userId).to.equal(1);
    });
  });

  // API-002 - GET Multiple Posts
  it("API-002 - Should retrieve multiple posts successfully", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);

      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("body");
      expect(response.body[0]).to.have.property("userId");
    });
  });

  // API-003 - POST
  it("API-003 - Should create a new post successfully", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "QA Automation Test",
        body: "This post was created during API testing",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);

      expect(response.body).to.have.property("id");
      expect(response.body.title).to.equal("QA Automation Test");
      expect(response.body.body).to.equal(
        "This post was created during API testing",
      );
      expect(response.body.userId).to.equal(1);
    });
  });

  // API-004 - PUT
  it("API-004 - Should update an existing post successfully", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        id: 1,
        title: "Updated QA Test",
        body: "This post was updated during API testing",
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.body.id).to.equal(1);
      expect(response.body.title).to.equal("Updated QA Test");
      expect(response.body.body).to.equal(
        "This post was updated during API testing",
      );
      expect(response.body.userId).to.equal(1);
    });
  });

  // API-005 - DELETE
  it("API-005 - Should delete a post successfully", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // API-006 - Invalid Endpoint
  it("API-006 - Should return 404 for an invalid endpoint", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/invalid-endpoint",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  // API-007 - Response Structure Validation
  it("API-007 - Should validate the response structure", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.body).to.have.all.keys("userId", "id", "title", "body");

      expect(response.body.id).to.be.a("number");
      expect(response.body.userId).to.be.a("number");
      expect(response.body.title).to.be.a("string");
      expect(response.body.body).to.be.a("string");
    });
  });
});
