Blockly.Blocks['linebot'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck("null")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id")
        .setOutput(true, 'String');
    this.appendValueInput("serect")
        .setCheck("null")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("serect")
        .setOutput(true, 'String');
    this.appendValueInput("token")
        .setCheck("null")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("token")
        .setOutput(true, 'String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


