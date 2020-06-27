import axios from 'axios';
import App from './classes/app';

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

// Run app
try {
  App.render();
} catch (err) {
  console.log(err.message);
}
