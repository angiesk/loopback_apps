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
};
