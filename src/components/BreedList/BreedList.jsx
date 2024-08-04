import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';

const DOG_API = 'https://dog.ceo/api/breeds/list/all';

const BreedList = () => {
    const [dogs, setDogs] = useState([]);
    const [open, setOpen] = useState({});

    const handleClick = (breed) => {
        setOpen((open) => ({
            ...open,
            [breed]: !open[breed],
        }));
    };

    useEffect(() => {
        fetch(DOG_API)
            .then((res) => res.json())
            .then((data) => {
                setDogs(
                    Object.entries(data.message).map(([breed, subbreeds]) => ({ breed, subbreeds }))
                );
            });
    }, []);

    return (
        <List
            sx={{ width: '100%', maxWidth: 360 }}
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                    Dog Breeds
                </ListSubheader>
            }
        >
            {dogs.map(({ breed, subbreeds }) => (
                <div key={breed}>
                    <ListItemButton onClick={() => handleClick(breed)}>
                        {subbreeds.length > 0 ? (
                            <ListItemText primary={breed} />
                        ) : (
                            <Link to={`/${breed}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemText primary={breed} />
                            </Link>
                        )}
                        {subbreeds.length > 0 && (open[breed] ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                    <Collapse in={open[breed]} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            {subbreeds.map((subbreed) => (
                                <Link to={`/${breed}/${subbreed}`} style={{ textDecoration: 'none', color: 'inherit' }} key={subbreed}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary={subbreed} />
                                    </ListItemButton>
                                </Link>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
        </List>
    );
};

export default BreedList;
