import { pool } from '../config/database.js'

const getCharacters = async (req, res) => {
    try{
        const selectAll =  `SELECT * FROM characters ORDER BY id ASC`
        // make sure to await the results from the query
        const results = await pool.query(selectAll)

        //return ok status and jsonify the rows to be used later
        res.status(200).json(results.rows)
    }catch (error) {
        res.status(409).json( { error: error.message } )
    }
} 

export default {getCharacters}