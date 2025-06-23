import { useState } from 'react';
import './App.css';
import { InputSource } from './components/InputSource';
import { BelowBox } from './BelowBox';
import { InputtedWord } from './InputtedWord';
//just a wrapper-- shouldn't know anything about website, which is why stuff is split into components
function App() {
  //it is like a function that updates a global variable sourceText so when I run it,
  //sourceText changes no matter what
  const [sourceText, setSourceText] = useState<string>('');
  const [inputtedWords, setInputtedWords] = useState<string[]>([]);
  


  return (
    //setSourceText in thr brackets is like a pointer to the original setSourceText
    //brackets around setSourceText because when passing a parameter to a component,
    //if the parameter isn't a literal or typescript then it has to be in brackets
    <>
    <InputSource setSourceText={setSourceText} setInputtedWords={setInputtedWords}/>
    
    
    <BelowBox sourceText={sourceText}/>
    
    {/* curly brackets go around all code */}
    {inputtedWords.map((word: string, index: number) => {
          return  <InputtedWord wordText={word + ' '}/>;

        })}

    </>
  );
}

export default App;
