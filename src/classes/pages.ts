import App from './app';
import { Page } from '../util/types';

import home from '../views/home';
import about from '../views/about';

export default class Pages {
	public static pages: Array<Page> = [home, about];
	public static currentPage: Page = home;
	public static setCurrentPage = (page: Page) => {
		Pages.currentPage = page;
		App.render();
		console.log(`Page changed to ${page.name}`);
	};
}