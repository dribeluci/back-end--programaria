const express= require ("express") //pegue o pacote express e deixe disponivel no meu código para usar sempre quando for necessário. 
const router= express.Router()
const cors = require('cors') // estou trazendo o pacote cors que permite iconsumir essa api no front-end
const conectaBancoDeDados = require('./bancoDeDados')// aqui estou ligando ao arquivo bancoDeDados
conectaBancoDeDados() // estou chamando a função que conecta o banco de dados


const Mulher = require('./mulherModel')


const app = express()
app.use(express.json())
app.use(cors())

const porta= 3333                                                                                                               


//GET
async function mostraMulheres(request, response){
      try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
      }catch (erro){
        console.log(erro)

      }
}

//POST
async function criaMulher(request, response) {

  const novaMulher = new Mulher({

      nome: request.body.nome,

      imagem: request.body.imagem,

      minibio: request.body.minibio,

      citacao: request.body.citacao

  })



  try {

      const mulherCriada = await novaMulher.save()

      response.status(201).json(mulherCriada)

  } catch (erro) {

      console.log(erro)

  }

}



//PATCH

async function corrigeMulher(request, response) {

  try {

      const mulherEncontrada = await Mulher.findById(request.params.id)



      if (request.body.nome) {

          mulherEncontrada.nome = request.body.nome

      }

 

      if (request.body.minibio) {

          mulherEncontrada.minibio = request.body.minibio

      }

 

      if (request.body.imagem) {

          mulherEncontrada = request.body.imagem

      }



      if (request.body.citacao) {

          mulherEncontrada = request.body.citacao

      }



      const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()



      response.json(mulherAtualizadaNoBancoDeDados)

  } catch (erro) {

      console.log(erro)

  }

}


//DELETE
async function deletaMulher(request, response) {

  try {

      await Mulher.findByIdAndDelete(request.params.id)

      response.json({ messagem: 'Mulher deletada com sucesso!'})

  } catch(erro) {

      console.log(erro)

  }

}

function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)  
}

app.use(router.delete('/mulheres/:id', deletaMulher))
app.use(router.patch('/mulheres/:id', corrigeMulher))

app.use(router.post('/mulheres', criaMulher))
app.use(router.get('/mulheres', mostraMulheres)) // configurei rota Post /mulheres
app.listen(porta, mostraPorta)
//Após ouvir a porta do númemro 3333 eu quero que você execute a função mostraPorta.

