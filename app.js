
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.type('html').send(html));

const fs = require('fs');
const jsonData = fs.readFileSync("./dados_da_planta.json", "utf8");

app.get('/dados_da_planta', (req, res) => {
  res.json(jsonData);
});

app.post("/plantas", (req, res) => {

  res.send(`Dados da planta recebido`);
});


const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Inven!RA!</title>
  </head>
  <body>
    <section>
      Testando minha URL para o Inven!RA!
    </section>
</br>
</br>
</br>
    <h4>Análise das plantas em ambientes extremamente secos</h4>
</br>
</br>
    Por favor introduza os dados da planta
    </br>
    <form action="/plantas" method="POST" enctype="multipart/form-data">
    <label for="nome">Nome da planta:</label>
    <input type="text" id="nome" name="nome" required><br><br>
    
    <label for="foto">Carregue uma foto da planta:</label>
    <input type="file" id="foto" name="foto" accept="image/*" required><br><br>

  
   
    <label for="perguntas">Perguntas sobre o estado da planta:</label></br>
    <select name="perguntas" id="perguntas">
   <optgroup label="Escolha a pergunta">
    <option value="Pergunta 1">Pergunta 1</option>
    <option value="Pergunta 2">Pergunta 2</option>
    <option value="Pergunta 3">Pergunta 3</option>
    <option value="Pergunta 4">Pergunta 4</option>
  </optgroup>
 
</select>
  

</br>
</br>
    <button name="button">Enviar</button>


    
  </form> 
  </body>
  </html>
  `
