'use strict';


module.exports = function ($youmeb,$sequelize) {

  var Posts = $sequelize.model('Posts');
  var Tags = $sequelize.model('Tags');

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
      var data = req.body.data;//console.log(req.body.data);
      var picid = req.body.picid;
      var tmp = [];
      for (var i=0;i<data.length;i++){ 
        tmp.push({postid:1,tagid:data[i].id,tagname:data[i].name,x:data[i].x,y:data[i].y,sitename:'7-11南港展覽館分店',addr:'南港展覽館',groupname:'衣櫃'});
      };
      Posts.create({
        userid:'1',
        status: 0,
        content:req.body.data,
        x:0,
        y:0,
        sitename:'7-11南港分店',
        addr:'南港展覽館',
        notice:'none',
        point:0
      }).success(function (final, err){
        console.log(final);
        console.log(err);
        // Tags.bulkCreate(tmp).success(function(d,e) { // Notice: There are no arguments here, as of right now you'll have to...
        //   console.log(d);
        //   console.log(e);
        //   res.send({
        //     res:true
        //   })
        // })
        // res.send({
        //   res:true,
        //   postid:1
        // })
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
