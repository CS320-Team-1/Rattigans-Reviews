import React from 'react';
import Select from 'react-select';
import {tvGenreDropdown, movieGenreDropdown} from '../utils/genres.js';
function GenreFilter(props) {
    const {onChange} = props;
    const dropDown = props.medium == "movie" ? movieGenreDropdown: tvGenreDropdown;
    return (
        <Select
            isMulti
            name="colors"
            options={dropDown}
            placeholder = "genres"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange = {onChange}
        />
    );
}
export default GenreFilter;