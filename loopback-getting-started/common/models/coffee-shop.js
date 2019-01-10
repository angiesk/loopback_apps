'use strict';

module.exports = function(Coffeeshop) {
    Coffeeshop.status=function(callback){
        let currentDate=new Date();
        var currentHour= currentDate.getHours();
        var OPEN_HOUR=6;
        var CLOSE_HOUR=20;
        console.log('Current hour is %d', currentHour);
        var response;
        if (currentHour>=OPEN_HOUR && currentHour<CLOSE_HOUR){
          response='We are open for biz';
        }
        else {
          response='Sorry, we are closed. We open daily from 6am to 8pm....';

        }
        callback(null,response);
    };
    Coffeeshop.getName = function(shopId, cb) {
        Coffeeshop.findById( shopId, function (err, instance) {
            var response = "Name of coffee shop is " + instance.name;
            cb(null, response);
            console.log(response);
        });
      }
    Coffeeshop.remoteMethod(
      'status', {
        http:{
          path:'/status',
          verb:'get'
        },
        returns:{
          arg:'status',
          type:'string'
        }
      }
    );
    Coffeeshop.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'string', required: true, http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
};
