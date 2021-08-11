'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 用户管理
 */
class UserController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户 记录用户账户、密码
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx, service } = this;
    // 格式校验
    ctx.validate(ctx.rule.createUserRequest);
    const payload = ctx.request.body || {};
    // const res = await service.user.create(payload);
    ctx.helper.success({ ctx, res: payload });
  }
}

module.exports = UserController;
