import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
// import ErrorExample from './tutorial/1-useState/setup/1-error-example';
// import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
// import UseStateObject from './tutorial/1-useState/setup/4-useState-object';
// import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
// import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics';
// import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
// import UseEffectFetchData from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';
// import MultipleReturns from './tutorial/3-conditional-rendering/setup/1-multiple-returns';
// import ShortCircuit from './tutorial/3-conditional-rendering/setup/2-short-circuit';
// import ShowHide from './tutorial/3-conditional-rendering/setup/3-show-hide';
// import ControlledInputs from './tutorial/4-forms/setup/1-controlled-inputs';
// import ControlledInputs from './tutorial/4-forms/setup/2-multiple-inputs';
// import UseRefBasics from './tutorial/5-useRef/setup/1-useRef-basics';
// import UseRefBasics from './tutorial/6-useReducer/setup';
// import Setup from './tutorial/7-prop-drilling/setup/1-prop-drilling';
// import Setup from './tutorial/9-custom-hooks/setup/1-fetch-example';
// import Setup from './tutorial/10-prop-types/setup/index';
import Setup from './tutorial/12-memo-useMemo-useCallback/setup';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Setup tab="home" />);
