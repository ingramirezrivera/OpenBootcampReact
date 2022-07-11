import React from 'react';
import { useHistory }from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {HomeIcon, Settings} from '@mui/icons-material';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
                (<Home/>)
            break;
        case 'TASKS':
                (<Home/>)
            break;

        case 'SETTINGS' :
                (<Settings/>)
            break;
        default:
                (<Home/>)

            break;
    }
}

const MenuListItems = ({list}) => {

    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)

    }
    return(
        <List>
            {list.map(({text, path, icon}, index) => {
                (
                    <ListItem key={index} button onClick={() => navigateTo(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}>
                            
                        </ListItemText>

                    </ListItem>
                )
            })}
        </List>
    )
}

export default MenuListItems