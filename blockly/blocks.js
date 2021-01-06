Blockly.Blocks['linebot'] = {
  init: function() {
    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("id");
    this.appendValueInput("serect")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("serect");
    this.appendValueInput("token")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("token");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


