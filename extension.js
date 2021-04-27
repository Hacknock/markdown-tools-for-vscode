const vscode = require("vscode");
const commands = vscode.commands;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "markdown-tools" is now active!'
  );

  context.subscriptions.push(
    commands.registerCommand("markdown-tools.greeting", () => {
      vscode.window.showInformationMessage("We are Hacknock!");
    }),
    commands.registerCommand("markdown-tools.onEnterKey", () => {
      vscode.window.showErrorMessage("改行したよ！");
    })
  );
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
