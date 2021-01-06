+(function (window, document) {

  'use strict';

  function linebot(channelid, channelsecret, token) {
    var obj = {};
    if (channelid != "''" || channelid.length > 0) {
      obj.value1 = channelid;
    }
    if (channelsecret != "''" || channelid.length > 0) {
      obj.value2 = channelsecret;
    }
    if (token != "''" || channelid.length > 0) {
      obj.value3 = token;
    }

  }

  window.linebot = linebot;

}(window, window.document));