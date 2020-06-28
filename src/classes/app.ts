import Pages from './pages';
import NavigationBar from '../components/navigation-bar';

// App connector
export default class App {

  static async render() {
		const app = document.getElementById('app');
		
		const pageContent: HTMLElement = Pages.currentPage.render();

    // const result: User = await call();
    // console.log(result)

    if (app) {
			app.innerHTML = '';
      app.appendChild(new NavigationBar().render());
			app.appendChild(pageContent);
    } else {
      throw new Error('App div not found');
    }
  }
}