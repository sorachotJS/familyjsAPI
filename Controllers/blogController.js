const createError = require("http-errors");
const { getBlog } = require("../Models/blog.Model");

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
      }}