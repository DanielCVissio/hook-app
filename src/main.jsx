import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleForm } from './02-useEffect/SimpleForm';
import './index.css';

//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <SimpleForm />
  //</React.StrictMode>
)
