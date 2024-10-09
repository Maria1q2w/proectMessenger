import './index.css';
import store from './redux/redux-store'; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SamuraiJSApp from './App';

ReactDOM.render(
    <SamuraiJSApp /> ,  document.getElementById('root')
);


// const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree =  ()  => {
//     root.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store= {store}>
//                     <App />
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>
//     );
// }


// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

// reportWebVitals();