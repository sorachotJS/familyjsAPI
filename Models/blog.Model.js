const createError = require("http-errors");
const db = require("../Services/db");

module.exports = {
    getBlog: async () => {
        return new Promise((resolve, reject) => {
          db.query(
            `
            SELECT blog_id,blog_subject,blog_detail,blog_cover,blog_slug,view,create_by,createDate 
            FROM tb_blog   
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
      }}