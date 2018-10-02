'use babel';

// This is a change to the view

export default class IgnoreMeView {

  constructor(serializedState) {
    require('fs-extra');

    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('ignore-me');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The IgnoreMe package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  // This is another change to the view file

}
