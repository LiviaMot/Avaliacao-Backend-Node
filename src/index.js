import express from "express";

const app = express();
app.use(express.json())

// rota

const port = 3000
app.listen(port, () => {
  console.info("Servidor rodando na porta " + port)
})