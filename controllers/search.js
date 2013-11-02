'use strict';

module.exports = function ($youmeb,$sequelize) {

  var Post = $sequelize.model('Posts');
  var Tags = $sequelize.model('Tags');

  this.$({
    name: 'search',
    path: '/search'
  });

  this.index = {
    path: '/:key',
    methods: ['get'],
    handler: function (req, res, next) {
      console.log(req);

      
    }
  };

};
