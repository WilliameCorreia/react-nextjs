import * as React from 'react';
import { Button } from '@mui/material';

interface Props {
    startIcon: JSX.Element;
    onclick():void ;
    buttonName: string;
}

const BtnGitHub = ({ startIcon, onclick, buttonName }:Props) => {
    return (
        <Button
            variant="contained"
            startIcon={startIcon}
            onClick={() => onclick()}
        >
            {buttonName}
        </Button>
    )
}

export default BtnGitHub;
