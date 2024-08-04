import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from './context/darkModeContext';

import BreedList from './components/BreedList/BreedList'
import Header from './components/Header/Header';
import RandomDog from './components/RandomDog/RandomDog'
import BreedImage from './components/BreedImage/BreedImage';

const App = () => {
    const { darkMode } = React.useContext(DarkModeContext);

    return (
        <div className={darkMode ? "dark app" : "app"}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<BreedList />} />
                    <Route path="/randomDogImage" element={<RandomDog />} />
                    <Route path="/:breedName" element={<BreedImage />} />
                    <Route path="/:breedName/:subBreedName" element={<BreedImage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
