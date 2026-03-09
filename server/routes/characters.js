import express, { Router } from 'express'
import path from 'path'
import CharactersController from '../controllers/characters.js'

import { fileURLToPath } from 'url'

// static importing data from server data
// import characterData from "../data/characters.js"

// import.meta.url contains the URL of the current module file.
// fileURLToPath turns it into computer readable path
const __filename = fileURLToPath(import.meta.url)
// grabbing the directory name this file is in
const __dirname = path.dirname(__filename)

const router = express.Router()

// static calling data from server data
// router.get('/', (req, res) => {
//   res.status(200).json(characterData)
// })

router.get('/', CharactersController.getCharacters)

router.get('/:characterName', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/character.html'))
})

export default router