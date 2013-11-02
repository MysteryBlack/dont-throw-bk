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
    path: '/update',
    methods: ['post'],
    handler: function (req, res, next) {
      
      Posts.create({
        userid:'1',
        status: 0,
        x:0,
        y:0,
        sitename:'7-11南港分店',
        addr:'南港展覽館',
        notice:'none',
        point:0
      }).success(function(final){
        console.log(final);
        res.send({
          res:true,
          postid:1
        })
      })
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
