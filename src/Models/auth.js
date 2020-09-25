const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// database
const db = require('../configs/db');

const authModel = {
    register: (body) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if(err) {
                    reject(err);
                }
                const {password, username} = body;
                bcrypt.hash(password, salt, (err, encryptedPass) => {
                    if(err) {
                        reject(err);
                    }
                    // check existing username
                    const checkQuery = `SELECT username FROM user WHERE username ='${username}'`;
                    db.query(checkQuery, (err, data) => {
                        if(err) {
                            reject(err);
                        }
                        else {
                            if(data.length) {
                                reject('Username already exist');
                            } else {
                                const newBody = {...body, password: encryptedPass};
                                const queryInsert = "INSERT INTO user SET ?";
                                db.query(queryInsert, newBody, (err, data) => {
                                    if(!err) {
                                        resolve(data);
                                    } else {
                                        reject(err);
                                    }
                                });
                            }
                        }
                    });
                });
            });
        });
    },
    loginUser: (body) => {
        return new Promise((resolve, reject) => {
            const {username, password} = body;
            const queryLevel = "SELECT id, username, password, id_level, picture, email FROM user WHERE username=?";
            db.query(queryLevel, username, (err, data) => {
                console.log(data);
                if(err) {
                    console.log(data)
                    reject(err);
                }
                if(!data.length) {
                    console.log(data)
                    reject("sorry username not found");
                } else {

                    bcrypt.compare(password, data[0].password, (err, result) => {
                        if(result) {
                            console.log(data);
                            const {id} = data[0];
                            const {id_level} = data[0];
                            const {picture} = data[0];
                            const {email} = data[0];
                            const payload = {
                                username,
                                id_level,
                            };
                            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                                // expiresIn: "180000",
                                expiresIn: "3h"
                            });
                            const msg = "login success";
                            resolve({token, msg, username, id_level, picture, email, id});

                        }
                        if(!result) {
                            reject('your password is incorect');
                        }
                        if(err) {
                            reject(err);
                        }
                    });
                }

            });

        });
    },
    updateUser : (body) => {
        return new Promise((resolve, reject) => {
            const queryString = 'UPDATE user SET? WHERE id=?';
            db.query(queryString, [body, body.id], (err, data) =>{
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }, 
    // getDataUser: ({id}) => {
    //     return new Promise((resolve, reject) =>{
    //         const queryString = `SELECT id, username, email, picture FROM users WHERE id=${id}`;
    //         db.query(queryString, (err, data) =>{
    //             if(!err){
    //                 resolve(data)
    //             } else{
    //                 reject(err)
    //             }
    //         })
    //     })
    // }

};

module.exports = authModel;