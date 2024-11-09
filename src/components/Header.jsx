import React from 'react';
import Logo from '../assets/paramTechLogo.svg';
import User from '../assets/user.svg';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/slices/loginSlice';

import '../components/Header.css';


function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((store) => store.user)

    const logoutHandle = () => {
        dispatch();
        dispatch(logoutUser());
        navigate("/");
    }
  return (
    <nav className='navbar'>
        <figure className='figure'>
            <img src={Logo} />
        </figure>

        <div className='navbar-info'>
            <figure className='figure'>
                <img src={User} />
            </figure>
            <span>{user.fullname}</span>
            <Button type='primary' danger onClick={() => logoutHandle()} >Çıkış</Button>
        </div>
    </nav>
  )
}

export default Header