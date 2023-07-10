import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Questions from "./components/questions/questions";
import Settings from "./components/settings/settings";
import Dashboard from "./components/menu/dashboard";
import StartPage from "./components/startPage/startPage";
import Scoreboard from "./components/scoreboard/scoreboard";
import PlayerScore from "./components/playerScore/playerScore";
import {DataProvider} from './DataContext';


const Routing = () => {

    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Dashboard/>}>
                        <Route index element={<StartPage/>}/>
                        <Route path='start' element={<StartPage/>}/>}
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="game" element={<Questions/>}/>
                        <Route path="playerscore" element={<PlayerScore/>}/>
                        <Route path="scoreboard" element={<Scoreboard/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    )
};

export default Routing;