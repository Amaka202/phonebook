import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/store/reducers/rootReducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode> 
      </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);


reportWebVitals();
