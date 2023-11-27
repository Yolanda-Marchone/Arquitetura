const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.type('html').send(html));

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
    <h1>Análise das plantas em ambientes extremamente secos</h1>
</br>
</br>
    Por favor introduza os dados da planta
    <form action="processar_formulario.php" method="POST" enctype="multipart/form-data">
    <label for="nome">Nome da planta:</label>
    <input type="text" id="nome" name="nome" required><br><br>
    
    <label for="foto">Carregue uma foto da planta:</label>
    <input type="file" id="foto" name="foto" accept="image/*" required><br><br>

  
    <label for="perguntas">Perguntas sobre o estado da planta:</label>
    
    <label for="perguntas1">Pergunta 1:</label>
    <label for="perguntas2">Pergunta 2:</label>
    <label for="perguntas3">Pergunta 3:</label>
    <label for="perguntas4">Pergunta 4:</label>

    
  </form> 

    
  </body>
</html>
`
