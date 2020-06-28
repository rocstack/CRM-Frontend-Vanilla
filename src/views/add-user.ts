import { Page } from '../util/types';
import Form from '../components/form';
import TextInput from '../components/text-input';

const page: Page = {
  name: 'Add User',
  render() {
		const content = document.createElement('div');
    content.className = 'container';
    
    const form = new Form('/add', 'POST').render();
    form.appendChild(new TextInput('name', 'text').render());

    content.appendChild(form);

    return content;
  },
};

export default page;
