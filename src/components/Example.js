import React, { useState } from 'react';
import useCarabiner from 'react-carabiner';

function Example() {
  const [clipboard, updateClipboard] = useCarabiner();
  const [inputText, setInputText] = useState('just climbing!');

  return (
    <>
      <div>
        <p>Current clipboard content: </p>
        <textarea value={clipboard} disabled/>
      </div>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() => updateClipboard(inputText)}>
          ⬅️Copy this text
        </button>
      </div>
    </>
  );
}

export default Example;
