// Se a peça possuir um peso superior a 100g, pode cadastrar
// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente
// Caso a peça tenha um nome com quantidade inferior a 3 caracteres informe uma mensagem de erro




let listaPecas = ["pc","computador", "mouse", "teclado", "impressora","axyz", "bxyz", "cxyz", "dxyz", "exyz",];// caixa//lista
let nomePeca = "pc"
let pesoPeca = 350;

if(listaPecas.length >= 11){//não tem espaço na lista
    console.log("Não pode cadastrar peças. Limite de 10 atingido"); 
    


} else {//tem espaço na lista para cadastrar//
    console.log("Adicione uma peça")


    if(pesoPeca >= 100){
        console.log("A peça possui mais de 100g e pode ser cadastrada");
        

        if (nomePeca.length < 3){
            console.log("ATENÇÃO! O nome da peça possui menos de 3 caracteres");
        }

    }
    

    

}

console.log ("Total de peças adicionadas até o momento: " + listaPecas.length);//tamanho da lista
