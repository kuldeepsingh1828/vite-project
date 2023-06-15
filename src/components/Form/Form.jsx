import React, { useState } from 'react'

export default function Form() {
    const [state, setState] = useState({
        username: '',
        usernameError: false,
        email: '',
        emailError: false,
        password: '',
        confirmPassword: '',
        confirmPasswordError: false,
        gender: 'male',
        validate: false
    });
    const changeHandler = (event) => {
        let { value, name } = event.target;
        if (value.length > 0) {
            if (name == 'username')
                state.usernameError = value.length < 5 ? true : false;
            else if (name == 'email')
                state.emailError = value.match(/\b@kuldeep.com/gi) == null ? true : false;
            else if (name == 'confirmPassword')
                state.confirmPasswordError = state.password != value ? true : false;
            else if (name == "password")
                state.confirmPasswordError = state.confirmPassword != value ? true : false;
        }
        setState((prevState) => ({ ...prevState, ...state, [name]: value }))
    }
    const checkHandler = (event) => {
        let { value, name } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    return (
        <form>
            <input name='username' value={state.username} onChange={changeHandler} type="username" />
            {state.usernameError && <span>Username should have at least 5 letters</span>}
            <input name='email' value={state.email} onChange={changeHandler} type="email" />
            {state.emailError && <span>Email not correct</span>}
            <input name='password' value={state.password} onChange={changeHandler} type="password" />
            <input name='confirmPassword' value={state.confirmPassword} onChange={changeHandler} type="password" />
            {state.confirmPasswordError && <span> Password Doesn't Match</span>}
            <input type="radio" name='gender' value="male" onChange={checkHandler} checked={(state.gender == 'male') ? true : false} /><span>Male</span>
            <input type="radio" name='gender' value="female" onChange={checkHandler} checked={(state.gender == 'female') ? true : false} /><span>Female</span>
            <input type="button" value="add user" disabled={!state.validate} />
        </form >
    )
}
/*
    Username atleast 5 letters
    password and confirm password should match -- done
    email @yourname.com
    male or female should be 1 selected -- Done
    button disabled until validatons -- Done

*/