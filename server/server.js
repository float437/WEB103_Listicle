import express from "express"
import './config/dotenv.js'
import charactersRouter from './routes/characters.js'

const app = express()

// trying to access /public? serve back the static files in the ./public folder.
app.use('/public', express.static('./public'))

// To serve the files from the client\public\scripts directory, 
// define a middleware function to serve static files from the scripts directory.
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Bayonetta API</h1>')
})

app.use('/characters', charactersRouter)

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})