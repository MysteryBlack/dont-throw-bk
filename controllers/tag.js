'use strict';

module.exports = function ($youmeb,$sequelize) {

  var Tags = $sequelize.model('Tags');


  this.$({
    name: 'tag',
    path: '/tag'
  });

  this.index = {
    path: '/all',
    methods: ['all'],
    handler: function (req, res, next) {
      Tags.findAll().success(function(tags) {
        console.log(tags);
        res.send({data:tags,res:true});
      });
    }
  };

};
