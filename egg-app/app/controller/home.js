'use strict';

const { readFile } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async home() {
    const data = await readFileAsync(resolve(__dirname, '../../package.json'));
    this.ctx.body = JSON.parse(data);
  }
}

module.exports = HomeController;
