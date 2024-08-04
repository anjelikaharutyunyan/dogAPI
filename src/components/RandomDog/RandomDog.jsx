import React, { useEffect, useState } from 'react'

const RANDOM_DOG_IMAGE = 'https://dog.ceo/api/breeds/image/random'

const RandomDog = () => {

    const [randomImage, setRandomImage] = useState([])

    useEffect(() => {
        fetch(RANDOM_DOG_IMAGE)
            .then((res) => res.json())
            .then((data) => {
                setRandomImage(data.message)
            })
    }, [])
    return (
            <div>
                <img src={randomImage} alt='randomDog' width={'350px'} height={'250px'} />
            </div>
    )
}

export default RandomDog