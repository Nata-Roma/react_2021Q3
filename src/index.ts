import ReactDom from 'react-dom';
import App from './app';
import './index.css';

const parentNode = document.getElementById('root');
parentNode.classList.add('root');

ReactDom.render(App(), parentNode);
