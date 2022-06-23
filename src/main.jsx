import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from "react-router-dom";

import './index.css';

//import { TodoApp } from './08-useReducer/TodoApp';
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*<React.StrictMode>*/}
      <MainApp />
    {/*</React.StrictMode>*/}
  </BrowserRouter>

)
