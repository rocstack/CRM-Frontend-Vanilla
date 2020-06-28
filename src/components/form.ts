import { Component } from '../util/types';

export default class Form implements Component {
  public name: string = 'Form';
	public action: string;
	public method: string;

  constructor(action: string, method: string) {
		this.action = action;
		this.method = method;
  }

  public render(): HTMLFormElement {
    const form = document.createElement('form');
		form.method = this.method;
    form.action = this.action;
    return form;
  }
}
