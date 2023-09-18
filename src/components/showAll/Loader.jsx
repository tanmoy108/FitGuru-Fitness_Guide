import React from 'react';
import { Stack } from '@mui/material';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%">
        <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#ee2323'
        />
        <h3 style={{textAlign:"center",color:"#ee2323"}} >If it takes long time, please refresh the page or Try something else</h3>
    </Stack>
);

export default Loader;