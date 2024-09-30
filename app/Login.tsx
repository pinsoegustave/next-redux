"use client";
import { logIn, logOut, toggleModerator } from '@/redux/features/authSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Login = () => {
    const [ username, setUsername ] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

    const onClickLogin = () => {
        dispatch(logIn(username));
    };
    const onClickToggle = () => {
        dispatch(toggleModerator());
    };
    const onClickLogout = () => {
        dispatch(logOut());
    };

  return (
    <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <button onClick={onClickLogin}>Login </button>
        <br />
        <button onClick={onClickLogout}>Logout </button>
        <br />

        { isAuth  && ( <button onClick={onClickToggle}>Toggle Moderator Status</button> )}
    </div>
  )
}

export default Login