import * as vscode from 'vscode';

export class QuickStartContainer1Provider implements vscode.TreeDataProvider<QuickStartContainer1TreeElement> {

  private rootElements: QuickStartContainer1TreeElement[]
  constructor() {
    this.rootElements = this.createElements();
  }

  getTreeItem(element: QuickStartContainer1TreeElement): vscode.TreeItem | Thenable<vscode.TreeItem> {
    const collapsibleState = element.children.length > 0 ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.None;
    return new vscode.TreeItem(element.name, collapsibleState);
  }

  getChildren(element?: QuickStartContainer1TreeElement): vscode.ProviderResult<QuickStartContainer1TreeElement[]> {
    return element ? element.children : this.rootElements;
  }

  /**
   * @return rootElements
   */
  private createElements(): QuickStartContainer1TreeElement[] {
    const parent1 = new QuickStartContainer1TreeElement('Item1');
    ['Item1_1', 'Item1_2'].forEach(name => {
      parent1.addChild(new QuickStartContainer1TreeElement(name));
    });

    const parent2 = new QuickStartContainer1TreeElement('Item2');
    parent2.addChild(new QuickStartContainer1TreeElement('Item2_1'));
    return [parent1, parent2];
  }
}

export class QuickStartContainer1TreeElement {


  private _children: QuickStartContainer1TreeElement[];
  private _parent: QuickStartContainer1TreeElement | undefined | null
  constructor(
    public name: string
  ) {
    this._children = [];
  }

  get parent(): QuickStartContainer1TreeElement | undefined | null {
    return this._parent;
  }

  get children(): QuickStartContainer1TreeElement[] {
    return this._children;
  }

  addChild(child: QuickStartContainer1TreeElement) {
    child.parent?.removeChild(child);
    this._children.push(child);
    child._parent = this;
  }

  removeChild(child: QuickStartContainer1TreeElement) {
    const childIndex = this._children.indexOf(child);
    if (childIndex >= 0) {
      this._children.splice(childIndex, 1);
      child._parent = null;
    }
  }
}