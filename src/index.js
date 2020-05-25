import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider }  from 'react-redux'
// store 异步调用中间件的引入
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
// 中间件 增强dispatch 能力
// import loggerMiddleware from './middlewares/logger'
// enhances store 增强器(开发过程中最好使用middlewares)
import loggerenhancer from './enhansers/logger'

const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), loggerenhancer))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
