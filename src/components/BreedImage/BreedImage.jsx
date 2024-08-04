import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useSelectedBreedSources from '../../hooks/useSelectedBreedSources';

const BreedImage = () => {
    const { breedName } = useParams();
    const navigate = useNavigate();
    const { src } = useSelectedBreedSources(breedName);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <ArrowBackIcon onClick={() => navigate('/')} />
            {src && (
                <img src={src} style={{ width: '250px', height: '250px' }} alt={`${breedName} image`} />
            )}
        </div>
    );
};

export default BreedImage;
