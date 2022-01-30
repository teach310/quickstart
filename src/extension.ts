// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { dateFormat } from './dateformat';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "quickstart" is now active!');

	let show_disposable = vscode.commands.registerCommand('quickstart.show', message => {
		if (message) {
			vscode.window.showInformationMessage(message);
		}
	});

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('quickstart.helloWorld', async () => {
		// vscode.commands.executeCommand("quickstart.show", "HelloWorld")
		// open テスト
		// let uri = vscode.Uri.file('/Users/Teach/workspace');
		// // workspaceとして開くコマンド
		// let success = await vscode.commands.executeCommand('vscode.openFolder', uri);
		// console.log(success);
		// 永続化用のパスを開くテスト
		// let uri = context.storageUri
		// console.log(`Workspace Storage Path: ${uri?.path}`)
		await onCommandInputBox1(context)
	});

	let disposable_gettoday = vscode.commands.registerCommand('quickstart.getToday', () => {
		let today: Date = new Date();
		vscode.window.showInformationMessage("Today:" + dateFormat(today))
	});

	context.subscriptions.push(
		disposable,
		disposable_gettoday,
		show_disposable
	);
}

// ラベルなし選択肢
const onCommandInputTest1 = async (context: vscode.ExtensionContext) => {
	const selectedItem = await vscode.window.showQuickPick(
		['Red', 'Green', 'Blue', 'Yellow'],
		{
			canPickMany: false,
			placeHolder: 'Choose your favorite color'
		})
	if (selectedItem) {
		vscode.window.showInformationMessage(`You choose ${selectedItem}`);
	}
}

// ラベルあり
const onCommandInputTest2 = async (context: vscode.ExtensionContext) => {
	// labelがメインの方
	const actions: vscode.QuickPickItem[] = [
		{ label: 'Action1', description: 'Description of Action1' },
		{ label: 'Action2', description: 'Description of Action2' },
		{ label: 'Action3', description: 'Description of Action3' },
		{ label: 'Action4', description: 'Description of Action4' }
	]
	const selectedItem = await vscode.window.showQuickPick(
		actions,
		{
			canPickMany: false,
			placeHolder: 'Choose your favorite action'
		})
	if (selectedItem) {
		vscode.window.showInformationMessage(`You choose ${selectedItem.label}`);
	}
}

const onCommandInputBox1 = async (context: vscode.ExtensionContext) => {
	const inputString = await vscode.window.showInputBox({
		prompt: 'Input your name',
		validateInput: (s: string): string | undefined => (!s) ? 'You must input something!' : undefined
	})
	if (inputString) {
		vscode.window.showInformationMessage(`Your name is ${inputString}`);
	}
}

// this method is called when your extension is deactivated
export function deactivate() { }
