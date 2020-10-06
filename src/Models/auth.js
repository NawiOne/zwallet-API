const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");

// database
const db = require("../configs/db");

const authModel = {
  register: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        const { password, email } = body;
        bcrypt.hash(password, salt, (err, encryptedPass) => {
          if (err) {
            reject(err);
          }
          // check existing username
          const checkQuery = `SELECT email FROM user WHERE email ='${email}'`;
          db.query(checkQuery, (err, data) => {
            if (err) {
              reject(err);
            } else {
              if (data.length) {
                reject("Email already use");
              } else {
                const newBody = { ...body, password: encryptedPass };
                const queryInsert = "INSERT INTO user SET ?";
                db.query(queryInsert, newBody, (err, data) => {
                  if (!err) {
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
      const { email, password, username } = body;
      const queryLevel =
        "SELECT id, username, password, id_level, pin, picture, email FROM user WHERE email=?";
      db.query(queryLevel, email, (err, data) => {
        console.log(data);
        if (err) {
          console.log(data);
          reject(err);
        }
        if (!data.length) {
          console.log(data);
          reject("sorry Email not found");
        } else {
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (result) {
              console.log(data);
              const { id } = data[0];
              const { id_level } = data[0];
              const { picture } = data[0];
              const { email, pin, username } = data[0];

              const payload = {
                username,
                id_level,
              };
              const token = jwt.sign(payload, process.env.SECRET_KEY, {
                // expiresIn: "180000",
                expiresIn: "3h",
              });
              const msg = "login success";
              resolve({
                token,
                msg,
                username,
                id_level,
                picture,
                email,
                id,
                pin,
              });
            }
            if (!result) {
              reject("your password is incorect");
            }
            if (err) {
              reject(err);
            }
          });
        }
      });
    });
  },
  updateUser: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "UPDATE user SET? WHERE email=?";
      db.query(queryString, [body, body.email], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updatePassword: ({ password, newPassword }, query) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT password FROM user WHERE email='${query.email}'`;
      db.query(queryString, (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(data);
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (!result) {
              reject("password is incorect");
            }
            if (result) {
              const queryUpdate = `UPDATE user set password=? WHERE email='${query.email}'`;
              bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                  reject(err);
                }
                bcrypt.hash(newPassword, salt, (err, encryptedPass) => {
                  if (err) {
                    reject(err);
                  }

                  db.query(queryUpdate, encryptedPass, (err, data) => {
                    if (!err) {
                      resolve(data);
                    } else {
                      reject(err);
                    }
                  });
                });
              });
            }
          });
        }
      });
    });
  },

  deleteUser: ({ email }) => {
    return new Promise((resolve, reject) => {
      const querystring = `DELETE FROM user WHERE email='${email}'`;
      db.query(querystring, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getDataUser: ({ email }) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT id, username, email, picture, balance, phone FROM  user WHERE email='${email}'`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getPIN: (body, query) => {
    const { pin } = body;
    return new Promise((resolve, reject) => {
      const queryString = `SELECT pin FROM user WHERE email='${query.email}'`;
      db.query(queryString, (err, data) => {
        console.log("ini body", pin);
        console.log(data[0].pin);
        console.log(pin == data[0].pin);
        if (err) {
          reject(err);
        } else {
          if (pin == data[0].pin) resolve(true);
          else reject(false);
        }
      });
    });
  },
  changePIN: (body, query) => {
    const { pin } = body;
    return new Promise((resolve, reject) => {
      const queryString = `UPDATE user set pin=? WHERE id=${query.id}`;
      db.query(queryString, pin, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getEmail: (query) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT email FROM user WHERE email='${query.email}'`;
      db.query(queryString, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  ressetPassword: (body, query) => {
    return new Promise((resolve, reject) => {
      const queryReset = `UPDATE user SET password=? WHERE email='${query.email}'`;
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(body.password, salt, (err, encryptedPass) => {
          if (err) {
            reject(err);
          }
          db.query(queryReset, [encryptedPass], (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
    });
  },
  updatePhone: (body, query) => {
    return new Promise((resolve, reject) => {
      const queryUpdate = `UPDATE user SET phone=? WHERE email='${query.email}'`;
      db.query(queryUpdate, [body.phone], (err, data) => {
        if(!err){
          resolve(data)
        }else{
          reject(err)
        }
      })
    })
  }
};

module.exports = authModel;
