import React from 'react';
import useCarabiner from 'react-carabiner';

function Example() {
  const [clipboard, updateClipboard] = useCarabiner();
  const sampleText = 'Click to copy my text!';

  return (
    <div>
      <p>Current clipboard content:</p>
      <p>{clipboard}</p>
      <button onClick={() => updateClipboard(sampleText)}>
        {sampleText}
      </button>
    </div>
  );
}

export default Example;
