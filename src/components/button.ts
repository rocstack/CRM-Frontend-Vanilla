import { IButton } from '../util/types';

export default class Button implements IButton {
  public name: string = 'Button';
  public buttonText: string;

  constructor(buttonText: string) {
    this.buttonText = buttonText;
  }

  public render(): HTMLButtonElement {
    const el = document.createElement('button');
    el.innerText = this.buttonText;
    return el;
  }
}
