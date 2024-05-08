import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import style from '../styles/Searchbar.module.css';
import { useNavigate } from "react-router-dom";
import GenreFilter from './GenreFilter.js';

function Landing() {
    return (
        <div className = {style.welcome}>
            <h1 className={style.pagetitle}> Welcome! </h1>
        </div>
      );
}
export default Landing;