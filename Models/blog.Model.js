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
      },
      insertBlog: async (body) => {
        return new Promise((resolve, reject) => {
          db.query(
            `
            INSERT INTO tb_blog (blog_subject,blog_detail,blog_cover,blog_slug,view,create_by,createDate) VALUES (?,?,?,?,?,?,?)
                    `,
            [
              body.blog_subject,
              body.blog_detail,
              body.blog_cover,
              body.blog_slug,
              body.view,
              body.create_by,
              body.createDate
            ],
            (err, rows) => {
              if (err) {
                console.log(err);
                reject(createError.InternalServerError());
              } else {
                resolve(rows);
              }
            }
          );
        });
      },
      deleteBlog: async (body) => {
        return new Promise((resolve, reject) => {
          db.query(
            `
            DELETE FROM tb_blog WHERE blog_id = ?
                    `,
            [
              body.blog_id
            ],
            (err, rows) => {
              if (err) {
                console.log(err);
                reject(createError.InternalServerError());
              } else {
                resolve(rows);
              }
            }
          );
        });
      }
    }