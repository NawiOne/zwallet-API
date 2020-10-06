const db = require('../configs/db');

const contactModel = {
    getContact: (page, limit, id) => {
        return new Promise((resolve, reject) => {
        const queryString = `SELECT * FROM user WHERE id != ${id}  LIMIT ? OFFSET ?`;
        const offset = (page-1)* limit;
        db.query(queryString, [Number(limit), offset], (err, data) => {
            if(!err){
                resolve(data)
            } else{
                reject(err)
            }
        })

        })
    },
    searchContact: (name) => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT * FROM user WHERE username LIKE '%${name}%'`;
            db.query(queryString, (err, data) =>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
}

module.exports = contactModel;