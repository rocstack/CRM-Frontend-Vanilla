import { Page } from '../util/types';
import Button from '../components/button';

const page: Page = {
  name: 'Add User',
  render() {
		const content = document.createElement('div');
		content.className = 'container';

    return content;
  },
};

export default page;
