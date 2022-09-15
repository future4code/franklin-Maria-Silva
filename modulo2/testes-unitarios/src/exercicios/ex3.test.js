import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para '[1, 2, 1]'", () => {
        const duplicados = checaItensDuplicados([1, 2, 1]);
        expect(duplicados).toEqual(true);
      });
});

describe("Checa itens duplicados", () => {
    it("retorna true para '['a', 'a', 'b', 'c']'", () => {
        const duplicados = checaItensDuplicados(['a', 'a', 'b', 'c']);
        expect(duplicados).toEqual(true);
      });
});

describe("Checa itens duplicados", () => {
    it("retorna false para '['f', 'd', 'e', 'a']'", () => {
        const duplicados = checaItensDuplicados(['f', 'd', 'e', 'a']);
        expect(duplicados).toEqual(false);
      });
});

describe("Checa itens duplicados", () => {
    it("retorna true para '['2.0', 'w', 'b', '2.0']'", () => {
        const duplicados = checaItensDuplicados(['2.0', 'w', 'b', '2.0']);
        expect(duplicados).toEqual(true);
      });
});

describe("Checa itens duplicados", () => {
    it("retorna false para '['-3.0', 'w', 'b', -3]'", () => {
        const duplicados = checaItensDuplicados(['-3.0', 'w', 'b', -3]);
        expect(duplicados).toEqual(false);
      });
});

describe("Checa itens duplicados", () => {
    it("retorna true para '[-1, -1, -1]'", () => {
        const duplicados = checaItensDuplicados([-1, -1, -1]);
        expect(duplicados).toEqual(true);
      });
});

describe("Checa itens duplicados", () => {
    it("retorna true para '[[], 'oi', 'ola', []]'", () => {
        const duplicados = checaItensDuplicados([[], 'oi', 'ola', []]);
        expect(duplicados).toEqual(true);
      });
});