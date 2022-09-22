import { performPurchase, User } from "../src";

describe("Testing the performPurchase function", () =>{
//a	
	test("Testing balance greater than value", () => {
		const user: User = {
			name: "Maria",
			balance: 200
		}
	
		const result = performPurchase(user, 150)
		
		expect(result).toEqual({
			name: "Maria",
			balance: 50
		});
	});
//b
	test("Testing balance greater than value", () => {
		const user: User = {
			name: "Maria",
			balance: 25
		}
	
		const result = performPurchase(user, 25)
		
		expect(result).toEqual({
			...user,
			balance: 0
		})
	});
//c
	test("Testing balance greater than value", () => {
		const user: User = {
			name: "Maria",
			balance: 30
		}
	
		const result = performPurchase(user, 60)
		
		expect(result).not.toBeDefined()
	})
});