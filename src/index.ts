import axios from 'axios';

import { Page } from './util/types';
import home from './views/home';

// interface User {
// 	message: string;
// 	user: object;
// }

// class User {
//   constructor() {}
// }

// const call = async () => {
// 	try {
// 		const r = await axios.post('http://localhost:3000/user/add', {
// 			firstName: 'Brad',
// 			lastName: 'Hayes',
// 		});
// 		return r.data;
// 	} catch(err) {
// 		throw err;
// 	}
// };

class Navigation {

}

class Pages {
	public static pages: Array<Page> = [home];
	public static currentPage: Page = home;
	public static setCurrentPage = (page: Page) => {
		Pages.currentPage = page;
		console.log(`Page changed to ${page.name}`);
	};
}

// App connector
class App {
  private static nav() {
  	const nav = document.createElement('nav');
  	const homeLink = document.createElement('button');
  	homeLink.innerText = 'Home';
  	homeLink.addEventListener('click', () => {
  		Pages.setCurrentPage(home);
  	});
  	nav.appendChild(homeLink);
  	return nav;
  }

  static async render() {
		const app: HTMLElement = document.getElementById('app')!;
		
		const pageContent = Pages.currentPage.render();

    // const result: User = await call();
    // console.log(result)

    if (app) {
			app.appendChild(this.nav());
			app.appendChild(pageContent);
    } else {
      throw new Error('App div not found');
    }
  }
}

// Run app
try {
  App.render();
} catch (err) {
  console.log(err.message);
}
