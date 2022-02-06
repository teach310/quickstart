// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { QuickStartContainer1Provider, QuickStartContainer1TreeElement } from './quickstartContainer1Provider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const quickstartContainer1Provider = new QuickStartContainer1Provider();
	vscode.window.registerTreeDataProvider('quickstartContainer1', quickstartContainer1Provider);
	const showDisposable = vscode.commands.registerCommand('quickstartContainer1.show', (element: QuickStartContainer1TreeElement) => {
		if (element) {
			vscode.window.showInformationMessage(`This is ${element.name}`, { modal: true });
		}
	});

	context.subscriptions.push(
		showDisposable
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
