'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 创建用户
   * @param {*} payload 
   * @returns
   */
  async create(payload) {
    const { ctx } = this;
    payload.password = await ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }
}

module.exports = UserService;
