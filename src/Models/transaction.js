const db = require("../configs/db");
const {DateTime} = require ('luxon')
const transactionModel = {
  doTransaction: (body) => {
    const {
      sender_id,
      receiver_id,
      trans_name,
      trans_type,
      notes,
      balance,
      amount,
    } = body;
    return new Promise((resolve, reject) => {
      const queryString = `INSERT INTO transactions SET sender_id=?, receiver_id=?, trans_name=?, trans_type=?, notes=?, amount=?`;
      db.query(
        queryString,
        [sender_id, receiver_id, trans_name, trans_type, notes, amount],
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            //decrease sender balance
            const quertUpdate = `UPDATE user SET balance=? WHERE id= ?`;
            db.query(quertUpdate, [balance, sender_id], (err, data) => {
              if (err) {
                reject(err);
              } else {
                //increase receiver balance
                const selectRecBalanace = `SELECT balance from user WHERE id=${receiver_id}`;
                db.query(selectRecBalanace, (err, dataReceiver) => {
                  if (err) {
                    reject(err);
                  } else {
                    console.log(dataReceiver)
                    const newBalance =
                      (dataReceiver[0].balance === null
                        ? 0 + Number(amount)
                        : Number(dataReceiver[0].balance)) +
                      Number(amount);

                    db.query(quertUpdate, [newBalance, receiver_id], (err, data) => {
                      if (err) {
                        reject(err, newBalance);
                      } else {
                        resolve(data, newBalance);
                      }
                    });
                  }
                });
              }
            });
          }
        },
      );
    });
  },
 getTransaction: (id,page, limit) => {
    const offset = (Number(page-1))* Number(limit);
   return new Promise((resolve, reject) => {
     const querySelect2 = `SELECT user.id, user.username, user.picture, transactions.id as transaction_id, transactions.receiver_id, transactions.trans_name, transactions.trans_type, transactions.amount, transactions.date as date FROM user JOIN transactions ON user.id = transactions.sender_id WHERE transactions.receiver_id =${id} UNION SELECT user.id, user.username, user.picture, transactions.id as transaction_id, transactions.receiver_id, transactions.trans_name, transactions.trans_type, transactions.amount, transactions.date as date FROM user JOIN transactions ON user.id = transactions.receiver_id WHERE transactions.sender_id = ${id} ORDER BY date DESC LIMIT ${limit} OFFSET ${offset}`;

    db.query(querySelect2, (err, data) => {
      console.log(data)
      if(err){
        reject(err)
      }else{
        const transactions = data;
        resolve(
          transactions.map((transaction) => {
            if(transaction.receiver_id === Number(id)){
              return {
                ...transaction,
                trans_type: 'in',
              }
            }
            return transaction
          })
        )
      }
    })
   })
 },
 notification: (body) => {
   return new Promise((resolve, reject) => {
     const queryString = 'INSERT INTO notification SET ?';
     db.query(queryString, body, (err, data) => {
       if(!err){
         resolve(data)
       }else{
         reject(err)
       }
     })
   })
 }

};

module.exports = transactionModel;
