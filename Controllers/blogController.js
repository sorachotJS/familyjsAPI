const createError = require("http-errors");
const { getBlog,insertBlog,deleteBlog } = require("../Models/blog.Model");

module.exports = {
    getBlogManage: async (req, res, next) => {
        try {
        //   if (!user) throw createError.BadRequest();
          const result = await getBlog();
    
          if (result.length === 0) throw createError.NotFound("DATA NOT FOUND!");
    
          const data = ({
            blog_id, blog_subject,blog_detail,blog_cover,blog_slug,view,create_by,createDate
          } = result);
    
          const dataResult = ({
            Data:data
          });
    
          res.send({
            status: 200,
            message: "get data success",
            data: dataResult,
            // token: req.token,
          });
        } catch (error) {
          next(error);
        }
      },
      insertBlogManagement: async (req, res, next) => {
        try {
          
          const result = await insertBlog(req.body);
    
          if (result.affectedRows === 0) throw createError.BadRequest();
    
          res.send({
            status: 200,
            message: "insert data success",
            // token: req.token,
          });
        } catch (error) {
          next(error);
        }
      },
      deleteBlogManagement: async (req, res, next) => {
        try {
          
          const result = await deleteBlog(req.body);
    
          if (result.affectedRows === 0) throw createError.BadRequest();
    
          res.send({
            status: 200,
            message: "delete data success",
            // token: req.token,
          });
        } catch (error) {
          next(error);
        }
      }
    }