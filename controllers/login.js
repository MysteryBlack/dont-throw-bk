'use strict';


module.exports = function ($youmeb) {

  this.$({
    name: 'login',
    path: '/login'
  }),
  this.yaccount = {
    path: '/yahoo/account',
    methods: ['all'],
    middlewares: ['yauth'],
    handler: function (req, res, next) {
      res.send('login');
    }
  };
  this.yauth = {
    path: '/yahoo/auth',
    methods: ['all'],
    middlewares: ['yauth'],
    handler: function (req, res, next) {
      res.send('login');
    }
  };
  this.yauthreturn = {
    path: '/yahoo/auth/return',
    methods: ['all'],
    middlewares: ['yauth'],
    handler: function (req, res, next) {
      res.send('login');
    }
  };
};
