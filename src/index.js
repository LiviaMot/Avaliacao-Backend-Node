import express from "express"
import router from './router/temperatura.js'

const app = express();
app.use(express.json())

// rota
app.use('/api/v1', router)

const port = 3000
app.listen(port, () => {
  console.info("Servidor rodando na porta " + port)
})