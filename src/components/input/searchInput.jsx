import React, { Component } from 'react';
import './searchInput.scss';
import spinner from '../../static/spinner.gif';

class SearchInput extends Component {

    render() {

        const { placeholder, value, onChange, loaded, focused, blur } = this.props

        return (
            <div className='inputWrapper'>

                <input type='text' placeholder={placeholder} value={value} onChange={onChange} onBlur={blur} onFocus={focused}/>

                <span>{!loaded && value.length >= 2 && <img src={spinner} alt='loading' className='loadingSpinner'></img>}</span>

            </div> 
        )
    }

}

export default SearchInput;