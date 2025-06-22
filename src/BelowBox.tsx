import { Box, Typography } from "@mui/material";


type BelowBoxProps = {
  sourceText: string;
};

export function BelowBox({sourceText}: BelowBoxProps) {
    return <Box>
            <Typography
            suppressContentEditableWarning={true}
            //fires event when typed
            dangerouslySetInnerHTML={{ __html: sourceText }}
            />
            </Box>
}

