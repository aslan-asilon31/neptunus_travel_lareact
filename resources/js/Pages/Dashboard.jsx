import React, { useState } from 'react';
import '@/Assets/Backend/styles.css' ;

import DashboardAdmin from '@/Pages/DashboardAdmin/DashboardAdmin';
import HotelRecommendationAdmin from '@/Pages/HotelRecommendationAdmin/HotelRecommendationAdmin';
import user from '@/Assets/Backend/img/user.png' ;


export default function Dashboard({ auth }) {

    const [showDashboardAdmin, setShowDashboardAdmin] = useState(true);
    const [showHotelRecommendationAdmin, setShowHotelRecommendationAdmin] = useState(false);

    const handleDashboardAdmin = () => {
        setShowDashboardAdmin(true);
        setShowHotelRecommendationAdmin(false);
    };  

    const handleHotelRecommendationAdmin = () => {
        setShowDashboardAdmin(false);
        setShowHotelRecommendationAdmin(true);
    };  

      
    return (
        <div>
            <div className="container">
            <div className="topbar">
                <div className="logo">
                    <h2>Neptunus travel.</h2>
                </div>
                <div className="search">
                    <input type="text" name="search" placeholder="search here" />
                    <label for="search"><i className="fas fa-search"></i></label>
                </div>
                <i className="fas fa-bell"></i>
                <div className="user">
                    <img src={user} alt="" />
                </div>
            </div>
            <div className="sidebar">
                <ul>
                    <li>
                        <div className="dashboard-admin" onClick={handleDashboardAdmin}>
                            <i className="fas fa-th-large"></i>
                            <div >Dashboard</div>
                        </div>
                    </li>
                    <li>
                        <i className="fas fa-user-graduate"></i>
                        <div className="hotel-recommendation-admin" onClick={handleHotelRecommendationAdmin}>Hotel</div>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-user-graduate"></i>
                            <div>Students</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-chalkboard-teacher"></i>
                            <div>Teachers</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-users"></i>
                            <div>Employees</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-chart-bar"></i>
                            <div>Analytics</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-hand-holding-usd"></i>
                            <div>Earnings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-cog"></i>
                            <div>Settings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-question"></i>
                            <div>Help</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className={showDashboardAdmin ? 'visible' : 'hidden'}>
                    <div className="dashboard-admin">
                    <DashboardAdmin/>
                    </div>
                </div>
                <div className={showHotelRecommendationAdmin ? 'visible' : 'hidden'}>
                    <div className="hotel-recommendation-admin">
                    <HotelRecommendationAdmin/>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
}
