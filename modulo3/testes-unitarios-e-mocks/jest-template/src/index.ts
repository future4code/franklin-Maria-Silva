//Exercício 1
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}

export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
      input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
      return false;
    }
  
    return true;
};

//Exercício 3
//a
// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
// };

//b
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
};

//c. A diferença é que uma delas utiliza a inversão de dependências, sendo usada para testar códigos que utilizam outras dependências, assim,
// módulos de alto nível não dependem de módulos de baixo nível, ambos se tornam dependentes da abstração. 


