import { Page } from '../util/types';

const page: Page = {
	name: 'Home',
	render() {
		const content = document.createElement('div');
		content.innerText = 'This is the home page.';
		return content;
	}
};

export default page;