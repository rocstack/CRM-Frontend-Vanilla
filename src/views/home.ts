import { Page } from '../util/types';
import Button from '../components/button';

const page: Page = {
  name: 'Home',
  render() {
		const content = document.createElement('div');
		content.className = 'container';
    content.innerText = 'This is the home page. asd';

    return content;
  },
};

export default page;
