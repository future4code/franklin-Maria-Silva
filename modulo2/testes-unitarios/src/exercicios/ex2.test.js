import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo("Socorram-me subi no onibus em marrocos");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'Anotaram a data da maratona'", () => {
    const ehPalindromo = checaPalindromo("Anotaram a data da maratona");
    expect(ehPalindromo).toEqual(true);
  });
});

