import React from 'react';
import Select from 'react-select';
import {genreDropdown} from '../utils/genres.js';
function GenreFilter(props) {
    const {onChange} = props;
    return (
        <Select
            isMulti
            name="colors"
            options={genreDropdown}
            placeholder = "genres"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange = {onChange}
        />
    );
}
export default GenreFilter;