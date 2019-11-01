import React from 'react';
import Example from './components/Example.js';
import codeSnippet from './codeSnippet.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Climbing Wall <span role='img' aria-label='climb'>🧗</span></h1>
      <p>
        A playground for <a href='https://npmjs.com/react-carabiner' target='_blank' rel='noopener noreferrer'>react-carabiner</a>, a React Hook to copy to the clipboard!
      </p>
      <div>
        <a
          className='badge'
          href='https://www.npmjs.com/package/react-carabiner'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/npm/v/react-carabiner.svg'
            alt='badge-v'
          />
        </a>
        <a
          className='badge'
          href='https://www.npmjs.com/package/react-carabiner'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/bundlephobia/min/react-carabiner.svg'
            alt='badge-min'
          />
        </a>
        <a
          className='badge'
          href='https://www.npmjs.com/package/react-carabiner'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/npm/dt/react-carabiner.svg'
            alt='badge-dt'
          />
        </a>
        <a
          className='badge'
          href='https://github.com/zroyer/react-carabiner/blob/master/LICENSE'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/github/license/zroyer/react-carabiner.svg'
            alt='badge-license'
          />
        </a>
        <a
          className='badge'
          href='https://github.com/zroyer/react-carabiner/pulls'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg'
            alt='badge-pulls'
          />
        </a>
      </div>
      <img src={codeSnippet} className='codeSnippet' alt='codeSnippet' />
      <Example />
    </div>
  );
}

export default App;
