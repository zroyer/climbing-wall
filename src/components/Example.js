import React, { useState } from 'react';
import useCarabiner from 'react-carabiner';
import { Input, Button } from 'antd';
const { Search, TextArea } = Input;

function Example() {
  const [clipboard, updateClipboard] = useCarabiner();
  const [inputText, setInputText] = useState('change this text!');
  const buttonAContent = 'Copy my text!';
  const buttonBContent = 'Copy this other text!';
  const buttonCContent = 'Clear the clipboard!';

  return (
    <div className='exampleContainer'>
      <div className='explainer'>Current clipboard content: </div>
      <TextArea
        className='exampleResults'
        rows={4}
        value={clipboard}
      />
      <div>Available inputs:</div>
      <Button
        className='exampleInput'
        type='primary'
        onClick={() => updateClipboard(buttonAContent)}
      >
        {buttonAContent}
      </Button>
      <Button
        className='exampleInput'
        type='ghost'
        onClick={() => updateClipboard(buttonBContent)}
      >
        {buttonBContent}
      </Button>
      <Search
        className='exampleInput'
        placeholder='Any text you want to copy!'
        value={inputText}
        enterButton='Copy'
        size='medium'
        onChange={(e) => setInputText(e.target.value)}
        onSearch={() => updateClipboard(inputText)}
      />
      <Button
        className='exampleInput'
        type='danger'
        onClick={() => updateClipboard()}
      >
        {buttonCContent}
      </Button>
    </div>
  );
}

export default Example;
