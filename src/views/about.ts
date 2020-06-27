import { Page } from '../util/types';

const page: Page = {
	name: 'About',
	render() {
		const content = document.createElement('div');
		content.innerText = 'This is the about page.';
		return content;
	}
};

export default page;