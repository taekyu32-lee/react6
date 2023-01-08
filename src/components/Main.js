import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../pages/Login';
import Join from '../pages/Join';
import DogJoin from '../pages/DogJoin';
import Board4_1 from '../pages/Board4_1';
import Board3 from '../pages/Board3';
import Board3Write from '../pages/Board3Write';

const Main = () => {
    return (
    <div>
        <Routes>
            <Route path="/login" exact={true} element={<Login/>} />
            <Route path="/join" exact={true} element={<Join/>} />
            <Route path="/joindog" exact={true} element={<DogJoin/>} />
             {/* <Route path="/board1" exact={true} element={<Board1/>} /> */}
            {/* <Route path="/board2" exact={true} component={Board2} />
            <Route path="/board2/modal" exact={true} component={ModalPage} /> */}
            <Route path="/board3" exact={true} element={<Board3/>} />
            {/* <Route path="/board3/detail/:id" exact={true} component={Board3Detail} />
            <Route path="/board3/modify/:id" exact={true} component={Board3Modify} /> */}
            <Route path="/board3/write" exact={true} element={<Board3Write/>} />
            <Route path="/map" exact={true} element={<Board4_1/>} />
        </Routes>
    </div>
    );
};

export default Main;