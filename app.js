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
  </body>
</html>
`
