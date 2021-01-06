Blockly.Blocks['linebot'] = {
    init: function () {
        this.appendValueInput("channelId")
            .setCheck("null")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("LINE")
            .appendField("channelId:");
        this.appendValueInput("channelSecret")
            .setCheck("null")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("channelSecret:");
        this.appendValueInput("Token")
            .setCheck("null")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Token:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
