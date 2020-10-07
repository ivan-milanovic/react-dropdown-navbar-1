import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function SignUpButton(){
    return(
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
    )
}
