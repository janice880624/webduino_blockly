+(function (window, document) {

  'use strict';

  function line_ifttt(event, key, v1, v2, v3) {
    var obj = {};
    if (v1 != "''" || v1.length > 0) {
      obj.value1 = v1;
    }
    if (v2 != "''" || v1.length > 0) {
      obj.value2 = v2;
    }
    if (v3 != "''" || v1.length > 0) {
      obj.value3 = v3;
    }
    var uri = 'https://maker.ifttt.com/trigger/' + event + '/with/key/' + key;
    $.post(uri, obj, function (e) {
      console.log(e);
    });
  }

  //------------------------------------------

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


  window.line_ifttt = line_ifttt;
  window.linebot = linebot;

}(window, window.document));
