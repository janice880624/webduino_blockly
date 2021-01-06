Blockly.JavaScript['line_ifttt'] = function(block) {
  var event = Blockly.JavaScript.valueToCode(block, 'line_ifttt_event', Blockly.JavaScript.ORDER_ATOMIC);
  var key = Blockly.JavaScript.valueToCode(block, 'line_ifttt_key', Blockly.JavaScript.ORDER_ATOMIC);
  var v1 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value1', Blockly.JavaScript.ORDER_ATOMIC);
  var v2 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value2', Blockly.JavaScript.ORDER_ATOMIC);
  var v3 = Blockly.JavaScript.valueToCode(block, 'line_ifttt_value3', Blockly.JavaScript.ORDER_ATOMIC);

  if (v1.length == 0) {
    v1 = "''";
  }
  if (v2.length == 0) {
    v2 = "''";
  }
  if (v3.length == 0) {
    v3 = "''";
  }

  var code = 'line_ifttt(' + event + ',' + key + ',' + v1 + ',' + v2 + ',' + v3 + ');';

  return code;
};

//-----------------------------------------------

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