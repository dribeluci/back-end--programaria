 const express= require ("express")
 //*pegue o pacote express e deixe disponivel no meu código para usar sempre quando for necessário. 
const router= express.Router()
 const app = express()
const porta= 3333                                                                                                               
//* "Crie uma constante com o apelido de porta e guarde a informação 3333"

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        minibio: 'Desenvolvedora e instrutora',                                                                      
    },
    {
        nome: 'Iana Chan',  
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]
   
function mostraMulheres(request, response){
    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)  
}
//* "Crie uma função com o apelido de mostraPorta e quando ela for executada eu quero que você mostre no terminal o texto "Servidor
// criado e rodando na porta e por fim mostre a porta que eu guardei na constante "

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
//*Após ouvir a porta do númemro 3333 eu quero que você execute a função mostraPorta.