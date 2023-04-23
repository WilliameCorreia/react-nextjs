import * as React from 'react';
import { Button, useTheme } from '@mui/material';
import { tokens } from '@/theme';

interface Props {
    startIcon: JSX.Element;
    onclick(): void;
    buttonName: string;
}

const BtnGitHub = ({ startIcon, onclick, buttonName }: Props) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Button
            variant="contained"
            startIcon={startIcon}
            onClick={() => onclick()}
            sx={{ background: `${colors.primary[400]} !important` }}
        >
            {buttonName}
        </Button>
    )
}

export default BtnGitHub;
