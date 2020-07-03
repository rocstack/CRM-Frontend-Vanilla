import { Component } from '../util/types';

export default class TextInput implements Component {
  public name: string = 'Text Input';
	public id: string;
	public type: string = 'text';

  constructor(id: string, type: string) {
		this.id = id;
		this.type = type;
  }

  public render(): HTMLInputElement {
		const input = document.createElement('input');
		input.id = this.id;
		input.type = this.type;
    return input;
  }
}
