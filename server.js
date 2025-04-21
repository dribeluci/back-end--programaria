 const express= require ("express")
 //*pegue o pacote express e deixe disponivel no meu código para usar sempre quando for necessário. 
const app = express()
const porta= 3333
//* "Crie uma constante com o apelido de porta e guarde a informação 3333"

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)  
}
//* "Crie uma função com o apelido de mostraPorta e quando ela for executada eu quero que você mostre no terminal o texto "Servidor
// criado e rodando na porta e por fim mostre a porta que eu guardei na constante "

//*mostraPorta()
//* Quando eu pedir para executar eu quero que você mostre essas informações. 

app.listen(porta, mostraPorta)
//*Após ouvir a porta do númemro 3333 eu quero que você execute a função mostraPorta.
