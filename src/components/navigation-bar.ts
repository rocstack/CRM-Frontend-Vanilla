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
			Pages.setCurrentPage(Pages.pages[0]);
		});

		const aboutButton = new Button('About').render();
		aboutButton.addEventListener('click', () => {
			Pages.setCurrentPage(Pages.pages[1]);
		});

		nav.appendChild(homeButton);
		nav.appendChild(aboutButton);
    return nav;
  }
}