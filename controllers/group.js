'use strict';

module.exports = function ($youmeb,$sequelize) {

  var Groups = $sequelize.model('Groups');

  this.$({
    name: 'group',
    path: '/group'
  });

  this.index = {
    path: '/all',
    methods: ['get'],
    handler: function (req, res, next) {
      Groups.findAll({
        attributes:['groupname']
      }).success(function(project) {
        //console.log(project);
        res.send({data:project,res:true});
      });
    }
  };
};
