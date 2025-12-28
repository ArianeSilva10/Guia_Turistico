const express = require("express")
const path = require("path")

const atrativoRouter = require('./controllers/AtrativoController.js')
const gastronomiaRouter = require('./controllers/GastronomiaController.js');
const curiosidadeRouter = require('./controllers/CuriosidadeController.js');

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, "..")))
app.use('/api/atrativos', atrativoRouter);  
app.use('/api/gastronomia', gastronomiaRouter);
app.use('/api/curiosidades', curiosidadeRouter)
app.listen(
    PORT,
    () => {
        console.log(`API executando em http://localhost:${PORT}`);
    }
)