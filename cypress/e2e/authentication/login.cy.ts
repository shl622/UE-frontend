describe("login page", () => {
    const user = cy
    it("should display validation errors", () => {
        user.visit("/")
        user.findByPlaceholderText(/email/i).type("test")
        user.findByRole("alert")
        user.should("have.text", "Please enter a valid email")
        user.findByPlaceholderText(/email/i).clear().type("test@test.com")
        user.findByPlaceholderText(/password/i).type("123")
        user.findByRole("alert").should("have.text", "Password must be at least 5 characters")
        user.findByPlaceholderText(/password/i).clear()
        user.findByRole("alert").should("have.text", "Password is required")
        //check backend validation errors
        user.findByPlaceholderText(/email/i).clear().type("cypress@test.com")
        user.findByPlaceholderText(/password/i).type("cypresstest")
        user.findByRole("button").should("not.have.class", "pointer-events-none").click()
        user.findByRole("alert").should("have.text", "Something went wrong. Please try again.")
    })
    it("should allow user to fill the form", () => {
        cy.visit("/")
        user.login("cypress@test.com", "cypress")
    })
})