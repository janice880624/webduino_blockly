Blockly.JavaScript['linebot'] = function (block) {
    var channelid = Blockly.JavaScript.valueToCode(block, 'channelId', Blockly.JavaScript.ORDER_ATOMIC);
    var channelsecret = Blockly.JavaScript.valueToCode(block, 'channelSecret', Blockly.JavaScript.ORDER_ATOMIC);
    var token = Blockly.JavaScript.valueToCode(block, 'Token', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // var code = '...;\n';

    if (channelid.length == 0) {
        channelid = "''";
    }

    if (channelsecret.length == 0) {
        channelsecret = "''";
    }

    if (token.length == 0) {
        token = "''";
    }

    var code = 'linebot(' + v1 + ',' + v2 + ',' + v3 + ');';
    return code;
};