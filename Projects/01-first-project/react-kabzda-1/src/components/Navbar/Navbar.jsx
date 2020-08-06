import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend'

const Navbar = (props) => {
debugger
    let friendsElements = props.friends.map((f) => <Friend image={f.imageURL} name={f.name}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item + ' ' + s.friends}>
                <NavLink to={'/friends'} activeClassName={s.activeLink}>Friends</NavLink>
                <div className={s.friendsElements}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar