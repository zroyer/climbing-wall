import React from 'react';
import Example from './components/Example.js';
import { Typography } from 'antd';
import './App.css';
import simpleExample from './simpleExample.svg';
const { Title } = Typography;

function App() {
  return (
    <div className='App'>
      <Title
        level={1}
        style={{ margin: '32px 0 0 0' }}
      >
        Climbing Wall <span role='img' aria-label='climb'>🧗</span>
      </Title>
      <div
        style={{ margin: '16px 0 8px' }}
      >
        A safe place to play with <a href='https://npmjs.com/react-carabiner' target='_blank' rel='noopener noreferrer'>react-carabiner</a>, a React Hook to copy to the clipboard!
      </div>
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
      <Title
        level={3}
        style={{ margin: '48px 0 16px' }}
      >
        Simple Example
      </Title>
      <img src={simpleExample} className='simpleExample' alt='simpleExample' />
      <Title
        level={3}
        style={{ margin: '48px 0 16px' }}
      >
        Try it out!
      </Title>
      <Example />
    </div>
  );
}

export default App;
