'use strict';


module.exports = function ($youmeb,$sequelize) {

  var Posts = $sequelize.model('Posts');

  this.$({
    name: 'posts',
    path: '/post'
  });

  this.getall = {
    path: '/all',
    methods: ['all'],
    handler: function (req, res, next) {
      Posts.findAll().success(function(posts) {
        console.log(posts);
        res.send({data:posts,res:true});
      });
    }
  };
  
  this.getonepost = {
    path: '/get/:id',
    methods: ['get'],
    handler: function (req, res, next) {
      res.send('login');
    }
  };
  
  this.updatepost = {
    path: '/update/:id',
    methods: ['post'],
    handler: function (req, res, next) {
      res.send('login');
    }
  };
  
  this.addpost = {
    path: '/add',
    methods: ['post'],
    handler: function (req, res, next) {
      res.send('login');
    }
  };

  this.getallarountpost = {
    path: '/around',
    methods: ['post'],
    handler: function (req, res, next) {
      res.send('login');


    }
  };
};
