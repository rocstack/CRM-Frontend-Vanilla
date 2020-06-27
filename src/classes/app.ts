import Pages from './pages';

// App connector
export default class App {
  private static nav() {
  	const nav = document.createElement('nav');
  	const homeLink = document.createElement('button');
  	homeLink.innerText = 'Home';
  	homeLink.addEventListener('click', () => {
  		Pages.setCurrentPage(Pages.pages[1]);
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
			app.innerHTML = '';
			app.appendChild(this.nav());
			app.appendChild(pageContent);
    } else {
      throw new Error('App div not found');
    }
  }
}