import React from 'react';
import { Paper, Tabs, Tab} from '@material-ui/core'

const Footer = () => {
    return(
        <Paper>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Facebook" />
                <Tab label="Instagram" />
                <Tab label="SoundCloud" />
            </Tabs>
        </Paper>
    )
}

export default Footer;