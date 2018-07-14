import React from 'react';
import ReactDOM from 'react-dom';
import 'toastr/build/toastr.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import {checkIfUser} from "./redux/actions/userActions";
import '../node_modules/font-awesome/css/font-awesome.min.css';




export const store = configureStore();
//store.dispatch(checkIfUser());
const WithRouter=()=>(
    <BrowserRouter>
        
            <ReduxProvider/>
        
    </BrowserRouter>
);
const ReduxProvider = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
