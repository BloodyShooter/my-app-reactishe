import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeAPP} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import NewsPage from "./components/News/NewsPage";
import store from "./redux/redux-store";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeAPP()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>

                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>

                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>

                    <Route path='/login' render={() =>
                        <LoginPage/>}/>

                    <Route path='/news' render={() =>
                        <NewsPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,{initializeAPP}))(App);

let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SamuraiJSApp;
