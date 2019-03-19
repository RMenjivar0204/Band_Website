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
                <Tab icon={<img alt="" src="https://img.icons8.com/material-outlined/24/000000/facebook.png"></img>} />
                <Tab icon={<img alt="" src="https://img.icons8.com/material-outlined/24/000000/instagram-new.png"></img>} />
                <Tab icon={<img alt="" src="https://img.icons8.com/material/24/000000/soundcloud.png"></img>} />
            </Tabs>
        </Paper>
    )
}

export default Footer;