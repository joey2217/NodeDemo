const {knex}=require('../util');

module.exports = {
  index: async(ctx, next) => {
    let data= await knex.select('*').from('test')
    // let data={id:1};
    ctx.response.body = data
  }
}