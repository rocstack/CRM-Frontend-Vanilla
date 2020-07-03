import { Page } from '../util/types';
import Form from '../components/form';
import Button from '../components/button';
import TextInput from '../components/text-input';

const page: Page = {
  name: 'Add User',
  render() {
		const content = document.createElement('div');
    content.className = 'container';
    
    const form = new Form('/add', 'POST').render();
    form.appendChild(new TextInput('name', 'text').render());
    form.appendChild(new TextInput('name', 'text').render());
    form.appendChild(new Button('Submit').render());
    content.appendChild(form);
    
    // form.addEventListener('submit', () => {
    //   alert('asd');
    // });

    return content;
  },
};

export default page;
