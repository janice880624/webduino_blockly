Blockly.Blocks['line_ifttt'] = {
    init: function () {
      this.appendValueInput("line_ifttt_event")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LINE ( IFTTT )")
        .appendField("Event Name :");
      this.appendValueInput("line_ifttt_key")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Key :");
      this.appendValueInput("line_ifttt_value1")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value1");
      this.appendValueInput("line_ifttt_value2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value2");
      this.appendValueInput("line_ifttt_value3")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value3");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("");
      this.setHelpUrl("https://buberhu.blogspot.com/2018/10/webduinolineifttt.html");
    }
  };