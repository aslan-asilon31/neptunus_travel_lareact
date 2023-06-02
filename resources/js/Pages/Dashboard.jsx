// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react'; 
import '@/Assets/Backend/styles.css' ;
import doctor2 from '@/Assets/Backend/img/doctor2.png' ;
import doctor3 from '@/Assets/Backend/img/doctor3.jpg' ;
import doctor4 from '@/Assets/Backend/img/doctor4.png' ;
import logo from '@/Assets/Backend/img/logo.png' ;
import logo2 from '@/Assets/Backend/img/logo2.png' ;
import logo3 from '@/Assets/Backend/img/logo3.png' ;
import user from '@/Assets/Backend/img/user.png' ;

export default function Dashboard({ auth }) {
    return (
        <div>
            <div class="container">
            <div class="topbar">
                <div class="logo">
                    <h2>Neptunus travel.</h2>
                </div>
                <div class="search">
                    <input type="text" name="search" placeholder="search here" />
                    <label for="search"><i class="fas fa-search"></i></label>
                </div>
                <i class="fas fa-bell"></i>
                <div class="user">
                    <img src={user} alt="" />
                </div>
            </div>
            <div class="sidebar">
                <ul>
                    <li>
                        <a href="#">
                            <i class="fas fa-th-large"></i>
                            <div>Dashboard</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-user-graduate"></i>
                            <div>Students</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <div>Teachers</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-users"></i>
                            <div>Employees</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-chart-bar"></i>
                            <div>Analytics</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-hand-holding-usd"></i>
                            <div>Earnings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-cog"></i>
                            <div>Settings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-question"></i>
                            <div>Help</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="main">
                <div class="cards">
                    <div class="card">
                        <div class="card-content">
                            <div class="number">1217</div>
                            <div class="card-name">Students</div>
                        </div>
                        <div class="icon-box">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <div class="number">42</div>
                            <div class="card-name">Teachers</div>
                        </div>
                        <div class="icon-box">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <div class="number">68</div>
                            <div class="card-name">Employees</div>
                        </div>
                        <div class="icon-box">
                            <i class="fas fa-users"></i>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <div class="number">$4500</div>
                            <div class="card-name">Earnings</div>
                        </div>
                        <div class="icon-box">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                    </div>
                </div>
                <div class="charts">
                    <div class="chart">
                        <h2>Earnings (past 12 months)</h2>
                        <div>
                            <canvas id="lineChart"></canvas>
                        </div>
                    </div>
                    <div class="chart doughnut-chart">
                        <h2>Employees</h2>
                        <div>
                            <canvas id="doughnut"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
}
