import { validateCharacter } from "../src";

//Exercício 2
describe("Testing the validateCharacter function", () =>{
//a
    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500
        });
    
        expect(result).toBe(false);
      });
//b
    test("Should return false for life 0", () => {
        const result = validateCharacter({
        name: "Scorpion",
        life: 0,
        strength: 300,
        defense: 500
        });

        expect(result).toBe(false);
    });
//c
    test("Should return false for force 0", () => {
        const result = validateCharacter({
        name: "Scorpion",
        life: 50,
        strength: 0,
        defense: 100
        });

        expect(result).toBe(false);
    });
//d
    test("Should return false for defense 0", () => {
        const result = validateCharacter({
        name: "Dragon",
        life: 100,
        strength: 200,
        defense: 0
        });

        expect(result).toBe(false);
    });
//e
    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
        name: "Dragon-fly",
        life: 1500,
        strength: 300,
        defense: 500
        });

        expect(result).toBe(true);
    });
    
});