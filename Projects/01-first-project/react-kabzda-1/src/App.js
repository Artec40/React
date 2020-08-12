import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import ProfileContainer from './components/Profile/ProfileContainer'
import { Route } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Friends from './components/Friends/Friends'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavbarContainer/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/friends'} render={() => <Friends/>}/>
            </div>
        </div>
    )
}

export default App
