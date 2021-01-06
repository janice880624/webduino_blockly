+(function (window, document) {

  'use strict';

  function linebot(id, serect, token){
    var obj = {};

    if ( id != "''" || id.length > 0){
      obj.id = id;
    }

    if ( serect != "''" || id.length > 0){
      obj.serect = serect;
    }

    if ( token != "''" || id.length > 0){
      obj.token = token;
    }
  }

  window.linebot = linebot;

}(window, window.document));
