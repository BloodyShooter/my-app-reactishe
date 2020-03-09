import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";


const App = (props) => {
    console.log(props)
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () =>
                        <Dialogs dialogsPage={props.state.dialogsReducer} dispatch={props.dispatch} /> } />
                    <Route path='/profile' render={ () =>
                        <Profile profilePage={props.state.profileReducer} dispatch={props.dispatch} /> } />
                </div>
            </div>
    );
};

export default App;
