const createError = require("http-errors");
const db = require("../Services/db");
// const helper = require("../Services/helper");

module.exports = {
    login: async (user,pass) => {
        return new Promise((resolve, reject) => {
          db.query(
            `
            SELECT user_id, user_username, user_email, user_address, user_status, user_active
                FROM tb_user 
                WHERE user_username = '${user}' and user_password= '${pass}' 
                    `,
            (err, rows) => {
              if (err) {
                reject(createError.InternalServerError());
              } else {
                resolve(rows);
              }
            }
          );
        });
      },
      updateLoginStatus: async (id) => {
        return new Promise((resolve, reject) => {
          let dateTime = new Date();
          db.query(
            "update user_table set user_loginstatus=1 where user_id=$1",
            [id],
            (err, rows) => {
              if (err) {
                reject(createError.InternalServerError());
              } else {
                resolve(rows);
              }
            }
          );
        });
      },
      updateLogoutStatus: async (id) => {
        return new Promise((resolve, reject) => {
          let dateTime = new Date();
          db.query(
            "update user_table set user_loginstatus=0 where id=$1",
            [id],
            (err, rows) => {
              if (err) {
                reject(createError.InternalServerError());
              } else {
                resolve(rows);
              }
            }
          );
        });
      },
    }