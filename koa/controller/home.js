const knex=require('../util');

module.exports = {
  index: async(ctx, next) => {
    let data= await knex.select().from('test');
    ctx.response.body = data
  }
}