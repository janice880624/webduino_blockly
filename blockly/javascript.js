Blockly.JavaScript['linebot'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_serect = Blockly.JavaScript.valueToCode(block, 'serect', Blockly.JavaScript.ORDER_ATOMIC);
  var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.

  if (value_id.length == 0) {
    value_id = "''";
  }
  if (value_serect.length == 0) {
    value_serect = "''";
  }
  if (value_token.length == 0) {
    value_token = "''";
  }

  var code = 'linebot(' + value_id + ',' + value_serect + ',' + value_token + ');';
  return code;
};