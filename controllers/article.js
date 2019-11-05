const Article = require('./../models/article');
const Classify = require('./../models/classify');

const articelController={
  all: async function(req,res,next){
    try{
       const article = await Article.all();
       res.json({code: 200,data: article}) 
    }catch(err){
      console.log(err)
      res.json({code:0, message:"内部错误"})
    }
  },
  insert: async function(req,res,next){
    let classify_id = req.body.classify_id;
    let title =req.body.title;
    let content =req.body.content;
    if(!classify_id || !title || !content){
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const article = await Article.insert({
        classify_id,title,content
      })
      let id = article[0];
      res.json({code:200,data:{id}})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  update: async function(req,res,next){
    let classify_id = req.body.classify_id;
    let title =req.body.title;
    let content =req.body.content;
    if(!classify_id || !title || !content){
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const article = await Article.update(id,{
        classify_id,title,content
      })
      res.json({code:200,data:article})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      const articles = await Article.single(id);
      const article = articles[0];
      res.json({code:200,data:article})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  //软删除
  delete: async function(req,res,next){ 
    let id = req.params.id;
    let is_delete = req.query.is_delete;
    console.log(is_delete)
    try{
      await Article.update(id,{is_delete});
      res.json({code:200,message:'删除成功'});
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  list: async function(req,res,next){
    let id  =req.params.id;
    try{
      const data = await Article.where({'classify.id':id})
      .leftJoin( 'classify' ,'article.classify_id','classify.id')
      .column('article.id','classify_name')
      // const data = await Classify.where({'classify.id':id})
      // .leftJoin( 'article' ,'classify.id','article.classify_id')
      // .column('article.id','classify_name')
      res.json({code:200,data:data});
      console.log(data)
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'});
    }
  }
}
module.exports = articelController;