import { Component } from '../util/types';
import Button from './button';
import Pages from '../classes/pages';

export default class NavigationBar implements Component {
	public name: string = 'NavigationBar';

	constructor() {}

  public render(): HTMLElement {
		const nav = document.createElement('nav');
		
		const homeButton = new Button('Home').render();
		homeButton.addEventListener('click', () => {
			Pages.setCurrentPage(0);
		});

		const aboutButton = new Button('About').render();
		aboutButton.addEventListener('click', () => {
			Pages.setCurrentPage(1);
		});

		const addUserButton = new Button('Add Page').render();
		addUserButton.addEventListener('click', () => {
			Pages.setCurrentPage(2);
		});

		nav.appendChild(homeButton);
		nav.appendChild(aboutButton);
		nav.appendChild(addUserButton);
    return nav;
  }
}