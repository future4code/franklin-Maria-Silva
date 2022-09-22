//Exercício 4
//a. Como a função performAttack utiliza a função validateCharacter, devemos criar um mock dela.

test("Showing jest.fn", () => {
	const mock = jest.fn(() => {
		const user = {
			name: "Maria",
			age: 25
		}
		return user
	})
})

//b

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
		return true
	});
});

//c
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
		return false
	});
});
