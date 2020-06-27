export interface Page {
	name: string;
	render: () => HTMLElement;
}

export interface Component {
	name: string;
	render: () => HTMLElement;
}

export interface IButton extends Component {
	buttonText: string;
}