import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import style from '../styles/Searchbar.module.css';

function Searchbar({}) {
    const [multimediaTerm, setMultimediaTerm] = useState('');
    
    function keyPress(event) {
        if(event.key == "Enter") {
            console.log(multimediaTerm);
        }
    }
    function saveState(event) {
        setMultimediaTerm(event.target.value)
    }
    function onClick() {
        console.log(multimediaTerm);
    }
    return (
        <div className = {style.searchbar}>
        <TextField className={style.textField}
          placeholder="Search"
          variant="outlined"
          sx={{border: 'none',"& fieldset": { border: 'none' },}}
          onChange={saveState}
          onKeyDown={keyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={onClick}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </div>
      );
}
export default Searchbar