'use strict';

module.exports = function ($youmeb,$sequelize) {

  var Tags = $sequelize.model('Tags');


  this.$({
    name: 'tag',
    path: '/tag'
  });

  this.index = {
    path: '/',
    methods: ['all'],
    handler: function (req, res, next) {
      res.send('tag');
    }
  };

};
