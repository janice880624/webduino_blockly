Blockly.Blocks['linebot'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck("null")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id");

    this.appendValueInput("serect")
        .setCheck("null")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("serect");

    this.appendValueInput("token")
        .setCheck("null")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("token");
    this.setOutput(true, 'Number');

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


