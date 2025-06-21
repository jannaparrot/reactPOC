import { useState } from 'react';
import './App.css';
import { Box, TextField, Typography } from '@mui/material';
import { InputSource } from './components/InputSource';

function App() {
  
  const [sourceText, setSourceText] = useState<string>('');


  return (
    <>
    <InputSource setSourceText={setSourceText}/>
    
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
