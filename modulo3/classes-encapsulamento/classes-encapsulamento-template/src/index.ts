// Exercicio 1
// a) O construtor é um método usado para definir como inicializar um objeto. Para chamá-lo usamos a keyword new.

// b) A mensagem "Chamando o construtor da classe UserAccount" foi impressa no terminal 1 vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
 
    public getCpf(): string {
        return this.cpf
    };

    public getName(): string {
        return this.name
    };

    public getAge(): number {
        return this.age
    }

    public getBalance(): number {
        return this.balance
    }

    public getTransactions(): Transaction[] {
        return this.transactions
    }

    public setTransactions(newTransaction: Transaction):void {
        this.transactions.push(newTransaction)
    }
};

const user = new UserAccount("123456789", "maria", 25) 

// c) Podemos ter acesso às propriedades privadas através dos métodos públicos getters e setters. 


// Exercicio 2 
class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }

    public getDate(): string {
        return this.date
    }

    public getValue(): number {
        return this.value
    }

    public getDescription(): string {
        return this.description
    }
}

const transferencia = new Transaction("12/06/22", 100, "pagamento");
user.setTransactions(transferencia);

// Exercicio 3
class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    };

    public getAccounts(): UserAccount[] {
        return this.accounts
    };

    public setAccounts(newAcccount: UserAccount): void {
        this.accounts.push(newAcccount)
    }
  }