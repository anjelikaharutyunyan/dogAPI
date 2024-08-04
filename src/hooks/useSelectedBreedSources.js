import { useState, useEffect } from 'react';

function useSelectedBreedSources(breedName) {
    const [src, setSrc] = useState('');
    const [breedImage, setBreedImage] = useState('');

    useEffect(() => {
        if (breedImage) {
            fetch(`https://dog.ceo/api/breed/${breedImage}/images/random`)
                .then((res) => res.json())
                .then((data) => {
                    setSrc(data.message);
                })
                .catch((error) => {
                    console.error('Error fetching breed image:', error);
                });
        }
    }, [breedImage]);

    useEffect(() => {
        setBreedImage(breedName);
    }, [breedName]);

    return { src };
}

export default useSelectedBreedSources;
