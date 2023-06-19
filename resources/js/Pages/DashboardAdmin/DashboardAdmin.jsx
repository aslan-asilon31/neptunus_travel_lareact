import React, { useState } from 'react';
import '@/Assets/Backend/styles.css' ;


import user from '@/Assets/Backend/img/user.png' ;

import doctor2 from '@/Assets/Backend/img/doctor2.png' ;
import doctor3 from '@/Assets/Backend/img/doctor3.jpg' ;
import doctor4 from '@/Assets/Backend/img/doctor4.png' ;
import logo from '@/Assets/Backend/img/logo.png' ;
import logo2 from '@/Assets/Backend/img/logo2.png' ;
import logo3 from '@/Assets/Backend/img/logo3.png' ;

export default function DashboardAdmin({ auth }) {
    const [isParagraphVisible, setIsParagraphVisible] = useState(true);

    const handleButtonClick = () => {
        setIsParagraphVisible(!isParagraphVisible);
    };

    return (
        <div>
            
        <div className="cards">
        <div className="card">
            <div className="card-content">
                <div className="number">1217</div>
                <div className="card-name">Students</div>
            </div>
            <div className="icon-box">
                <i className="fas fa-user-graduate"></i>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <div className="number">42</div>
                <div className="card-name">Teachers</div>
            </div>
            <div className="icon-box">
                <i className="fas fa-chalkboard-teacher"></i>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <div className="number">68</div>
                <div className="card-name">Employees</div>
            </div>
            <div className="icon-box">
                <i className="fas fa-users"></i>
            </div>
        </div>
        <div className="card">
            <div className="card-content">
                <div className="number">$4500</div>
                <div className="card-name">Earnings</div>
            </div>
            <div className="icon-box">
                <i className="fas fa-dollar-sign"></i>
            </div>
        </div>
        </div>
        <div className="charts">
        <div className="chart">
            <h2>Earnings (past 12 months)</h2>
            <div>
                <canvas id="lineChart"></canvas>
            </div>
        </div>
        <div className="chart doughnut-chart">
            <h2>Employees</h2>
            <div>
                <canvas id="doughnut"></canvas>
                <div className="bg-indigo-500">
                {isParagraphVisible && <p>This is a paragraph.</p>}
                <button onClick={handleButtonClick} className="bg-pink-500">
                    {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
                </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}



