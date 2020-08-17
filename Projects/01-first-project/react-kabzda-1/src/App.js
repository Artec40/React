import React, { Component } from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import { Route, withRouter } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginPage from './Login/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from '../src/redux/app-reducer'
import Preloader from '../src/components/common/Preloader/Preloader'

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>

                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>

                    <Route path={'/news'} render={() => <News/>}/>

                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>

                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>

                    <Route path={'/login'}
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)
