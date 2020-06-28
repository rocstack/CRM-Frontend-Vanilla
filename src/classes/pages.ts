import App from './app';
import { Page } from '../util/types';

import home from '../views/home';
import about from '../views/about';
import addUser from '../views/add-user';

export default class Pages {
	public static pages: Array<Page> = [home, about, addUser];
	public static currentPage: Page = home;

	public static setCurrentPage = (pageIndex: number) => {
		Pages.currentPage = Pages.pages[pageIndex];
		App.render();
	};
}