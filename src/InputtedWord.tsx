import { Typography } from "@mui/material";


type InputtedWordProps = {
  wordText: string;
};

export function InputtedWord({wordText}: InputtedWordProps) {
    //is like a span tag- text you want goes in there in between it
    return <Typography display='inline'>
            {wordText}
        </Typography>
}

