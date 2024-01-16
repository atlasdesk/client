import {faker} from "@faker-js/faker"

describe('signup on the webpage', () => {
  it('creates a user and logs in', () => {
		cy.visit("/auth/signup");

		cy.url().should("include", "/auth/signup");

		cy.wait(1000);

		const email = faker.internet.email();
		const password = faker.internet.password();
		const name = faker.person.firstName();
		const surname = faker.person.lastName();

		cy.get("input[data-test='name']").should("have.attr", "type", "text").type(name)
		cy.get("input[data-test='surname']").should("have.attr", "type", "text").type(surname)
		cy.get("input[data-test='email']").should("have.attr", "type", "email").type(email)
		cy.get("input[data-test='password']").should("have.attr", "type", "password").type(password)
		cy.get("input[data-test='confirm-password']").should("have.attr", "type", "password").type(password)
		cy.get("input[data-test='accept-terms']").should("have.attr", "type", "checkbox").check()

		cy.get("button[type='submit']").click()

		cy.url().should("include", "/auth/login");

		cy.wait(1000);

		cy.get("input[data-test='email']").should("have.attr", "type", "email").type(email)
		cy.get("input[data-test='password']").should("have.attr", "type", "password").type(password)

		cy.get("button[type='submit']").click()

		cy.url().should("include", "/dashboard");

		cy.getCookie("refreshToken").should("exist");
		cy.getCookie("accessToken").should("exist");
  })
})