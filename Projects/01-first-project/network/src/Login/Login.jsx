import React from 'react'
import { reduxForm } from 'redux-form'
import { Input } from '../components/common/FormsControls/FormsControls'
import { required } from '../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from '../components/common/FormsControls/FormsControls.module.css'
import { createField } from '../components/common/FormsControls/FormsControls'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('password', 'password', [required], Input, {type: 'password'})}
            {createField('rememberMe', 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.loginWindow}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)