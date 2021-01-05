Blockly.JavaScript['linebot'] = function(block) {
    var value_channelid = Blockly.JavaScript.valueToCode(block, 'channelId', Blockly.JavaScript.ORDER_ATOMIC);
    var value_channelsecret = Blockly.JavaScript.valueToCode(block, 'channelSecret', Blockly.JavaScript.ORDER_ATOMIC);
    var value_token = Blockly.JavaScript.valueToCode(block, 'Token', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // var code = '...;\n';

    // var bot = linebot({
    //     channelId: value_channelid,
    //     channelSecret: value_channelsecret,
    //     channelAccessToken: value_token
    // });
    var code = 'digitalWrite('+value_pin+', '+dropdown_mode+');\n';

    return code;
};