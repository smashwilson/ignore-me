'use babel';

import IgnoreMeView from './ignore-me-view';
import { CompositeDisposable } from 'atom';

// Nothing but a comment

export default {

  ignoreMeView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.ignoreMeView = new IgnoreMeView(state.ignoreMeViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.ignoreMeView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'ignore-me:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.ignoreMeView.destroy();
  },

  serialize() {
    return {
      ignoreMeViewState: this.ignoreMeView.serialize()
    };
  },

  toggle() {
    console.log('IgnoreMe was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
