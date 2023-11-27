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
    <form action="processar_formulario.php" method="POST" enctype="multipart/form-data">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required><br><br>
    
    <label for="foto">Foto:</label>
    <input type="file" id="foto" name="foto" accept="image/*" required><br><br>
    
    <label for="perguntas">Pergunta 1:</label>
    <input type="text" id="pergunta1" name="pergunta1" required><br><br>
  </form> 

    
  </body>
</html>
`
