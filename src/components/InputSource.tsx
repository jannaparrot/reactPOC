import { TextField } from "@mui/material";

type InputSourceProps = {
  setSourceText: React.Dispatch<React.SetStateAction<string>>;
};

//export lets it be available outside of itself
// anything after a colon is telling it what type it is
export function InputSource({setSourceText}: InputSourceProps) {

  // onInput expects an input that takes form event for an html element
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    // event has a target where the text comes from
  const target = event.target as HTMLInputElement;
    const text = target.value;
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
    console.log(styledContent)
    setSourceText(styledContent);
  };

return <TextField
    onInput={handleInput}
>

</TextField>


}
