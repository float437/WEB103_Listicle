// this file creates the gifts table and loads the 
// data we already have into the database

import { pool } from './database.js'
import './dotenv.js'
import characterData from '../data/characters.js'

const createCharactersTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS characters;

        CREATE TABLE IF NOT EXISTS characters (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            other_names VARCHAR(255),
            health INTEGER,
            affiliation VARCHAR(255),
            image VARCHAR(255),
            game_introduced VARCHAR(255) NOT NULL,
            weapon_of_choice VARCHAR(255),
            origin VARCHAR(255),
            description TEXT
        );
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 characters table created successfully')
    }catch(err){
        console.error('⚠️ error creating characters table', err)
    }
}

const removeGiftsTable = async () => {
    const removeTableQuery = `
        DROP TABLE IF EXISTS gifts;
    `
    try {
        const res = await pool.query(removeTableQuery)
        console.log('🎉 gifts table removed successfully')
    }catch(err){
        console.error('⚠️ error removing gifts table', err)
    }
}


    
const seedCharactersTable = async () =>{
    await removeGiftsTable()
    await createCharactersTable()

    characterData.forEach ((character) => {
        const insertQuery = {
            text: 'INSERT INTO characters (name, other_names, health, affiliation, image, game_introduced, weapon_of_choice, origin, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        }

        const values = [
            character.name,
            character.other_names,
            character.health,
            character.affiliation,
            character.image,
            character.game_introduced,
            character.weapon_of_choice,
            character.origin,
            character.description
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting character', err)
                return
            }

            console.log(`✅ ${character.name} added successfully`)
        })
    })
}

seedCharactersTable()