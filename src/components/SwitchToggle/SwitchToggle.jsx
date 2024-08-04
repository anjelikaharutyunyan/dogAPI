import * as React from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import '../../dark.css';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchToggle() {
    const { dispatch } = React.useContext(DarkModeContext);
    const [isSwitchOn, setSwitchOn] = React.useState(false);

    const handleChange = () => {
        setSwitchOn(!isSwitchOn);
        dispatch({ type: 'TOGGLE' });
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={<Switch checked={isSwitchOn} onChange={handleChange} />}
                label="Dark/Light Mode"
            />
        </FormGroup>
    );
}
