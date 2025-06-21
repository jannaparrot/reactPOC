import { useState } from 'react';
import './App.css';
import { Box, Typography } from '@mui/material';
import { InputSource } from './components/InputSource';
//just a wrapper-- shouldn't know anything about website, which is why stuff is split into components
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
