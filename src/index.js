import {StrictMode, Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const text = "Haried up"

// const elem = (
//   <div>
//     <h2>{text} bitch!</h2>
//     <input type="text" />
//     <button tabIndex={0}>Click</button>
//   </div>
// )

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hi there')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

