import React from 'react';
import BOSS from '../assets/boss.png';
import Logo from '../assets/logo.svg';

const Toolbar = (props) => (
    <header>
        <nav>
            <ul className="left">
                <li>
                    <img src={Logo} alt=""/>
                </li>
                <li><i className="fa fa-search"></i></li>
                <li><i className="fa fa-calendar"></i></li>
                <li><i className="fa fa-file-text-o"></i></li>
            </ul>
            <ul className="right">
                <li><img src={BOSS} alt="myphoto"/></li>
                <li><i className="fa fa-bell"></i></li>
                <li><i className="fa fa-info-circle"></i></li>
                <li><i className="fa fa-cog"></i></li>
            </ul>
        </nav>
    </header>
);

export default Toolbar;
