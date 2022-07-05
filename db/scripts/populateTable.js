import { pool } from '../index.js';
import resources from "../../data.js"


async function populateTable(){

    for(let i = 0; i < resources.length; i++){
        const result = await pool.query(
            `INSERT INTO shopping(item, completed ) VALUES ($1, $2) RETURNING *;`,
            [resources[i].item, resources[i].completed]);
            console.log(result.rows)
        }
    }

populateTable();