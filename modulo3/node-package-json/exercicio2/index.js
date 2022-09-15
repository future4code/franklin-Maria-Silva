//Exercício 2

const operacao = process.argv[2];
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);

switch(operacao){
	case "add":
		return console.log("O resultado da soma é:", numero1 + numero2);
		break;
	case "subt":
		return console.log("O resultado da subtração é:", numero1 - numero2);
		break;
    case "mult":
        return console.log("O resultado da multiplicação é:", numero1 * numero2);
        break;
    case "div":
        return console.log("O resultado da divisão é:", numero1 / numero2);
        break;   
    default:
        return console.log("Ops!")
        break;
}