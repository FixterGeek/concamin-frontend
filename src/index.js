import React from 'react';
import ReactDOM from 'react-dom';
import 'toastr/build/toastr.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const WithRouter=()=>(
    <BrowserRouter>
        
            <App/>
        
    </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
