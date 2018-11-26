const {knex}=require('../util');

module.exports = {
  index: async(ctx, next) => {
    // let data= await knex.select('*').from('test')
    let data={id:1};
    ctx.response.body = data
  },
  test: async(ctx, next) => {
    let data=await knex.select('*').from('test')
    console.log(JSON.parse(JSON.stringify(data[0])))
    await ctx.render('index.ejs',{data:JSON.parse(JSON.stringify(data[0]))});
  },  
  login: async(ctx, next) => {
    let data={id:1,token:'token'};
    ctx.response.body = data
  },
}