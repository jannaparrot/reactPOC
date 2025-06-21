import { useState } from 'react';
import './App.css';
import { Box, TextField, Typography } from '@mui/material';

function App() {
  
  const [sourceText, setSourceText] = useState<string>('');

  // onInput expects an input that takes form event for an html element
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    // event has a target where the text comes from
  const target = event.target as HTMLInputElement;
    const text = target.value;
    console.log(text)
    const words = text.split(' ');
    // instantiate variable is let (or var) for dynamic variable
    let styledContent = '';
    
    //loop
    words.forEach((word: string) => {
      let color = 'black';
      console.log(word.toLowerCase()==='them')
      if (word.toLowerCase() === 'them') {
        color = 'blue';
      }
      styledContent += `<span style="color: ${color};">${word}</span> `;
    });

    setSourceText(styledContent);
  };


  return (
    <>
    <TextField
    onInput={handleInput}
>

</TextField>
    <Box>
      <Typography
      suppressContentEditableWarning={true}
      //fires event when typed
      dangerouslySetInnerHTML={{ __html: sourceText }}
    />
    </Box>
    </>
  );
}

export default App;
