// import '@/Assets/Frontend/styles.css';
import stay1 from '@/Assets/Frontend/assets/stay1.jpg';
import stay2 from '@/Assets/Frontend/assets/stay2.jpg';
import stay3 from '@/Assets/Frontend/assets/stay3.jpg';
import stay4 from '@/Assets/Frontend/assets/stay4.jpg';
import avatar from '@/Assets/Frontend/assets/avatar.png';
import bali1 from '@/Assets/Frontend/assets/bali1.jpg';
import gal1 from '@/Assets/Frontend/assets/gal1.jpg';
import gal2 from '@/Assets/Frontend/assets/gal2.jpg';
import gal3 from '@/Assets/Frontend/assets/gal3.jpg';
import gal4 from '@/Assets/Frontend/assets/gal4.jpg';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
    <body style={{ backgroundImage: `url(${bali1})`, }}>
    <div class="dashboard" >
      <div class="sidebar">
        <div class="logo">
          <span>Neptunus</span> <br />
          Travel.
        </div>
        <div class="sidebar--links">
          <div class="ri-community-line sidebar--link"></div>
          <div class="ri-flight-takeoff-line sidebar--link"></div>
          <div class="ri-train-line sidebar--link"></div>
          <div class="ri-roadster-line sidebar--link"></div>
          <div class="ri-quil-pen-line sidebar--link"></div>
        </div>
      </div>
      <div class="main">
        <div class="left">
          <div class="search">
            <input
              type="text"
              placeholder="Destination, Hotel, Attraction, etc.."
            />
            <i class="ri-search-line search--icon"></i>
          </div>
          <div class="popular--stays">
            <h2>Popular Stays</h2>
            <p>In Bali Indonesia</p>
            <div class="stays">
              <div class="stay">
                <div class="img--cover">
                  <img src={stay1} />
                </div>
                <div class="stay--details">
                  <h6>Entire bungalow in bay area</h6>
                  <h4>Pura Tanah Lot</h4>
                  <p>$255 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (120)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={stay2} />
                </div>
                <div class="stay--details">
                  <h6>Entire house in Koa Lanta Yai</h6>
                  <h4>Udaya Resort and Spa</h4>
                  <p>$160 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (98)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={stay3} />
                </div>
                <div class="stay--details">
                  <h6>With morning sunrise</h6>
                  <h4>Jimbaran stay</h4>
                  <p>$186 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (74)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={stay4} />
                </div>
                <div class="stay--details">
                  <h6>Natural beauty and sea view</h6>
                  <h4>Nusa Dusa</h4>
                  <p>$325 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (99)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
              <div class="stay">
                <div class="img--cover">
                  <img src={bali1} />
                </div>
                <div class="stay--details">
                  <h6>some text</h6>
                  <h4>some tect</h4>
                  <p>$25 / night</p>
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <p>4.5 (38)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="profile">
            <div class="profile--cover">
              <img src={avatar} alt="" />
            </div>
            <p>Hello, Aslan!</p>
            <i class="ri-arrow-down-s-line"></i>
          </div>

          <div class="title--container">
            <h4>Live as if</h4>
            <h1>The Paradise</h1>
            <h4>is on earth</h4>
            <div class="btn">Plan a trip</div>
          </div>
          <div class="galary">
            <div class="galary--img--cover">
              <img src={gal1} alt="" />
            </div>
            <div class="galary--img--cover">
              <img src={gal2} alt="" />
            </div>
            <div class="galary--img--cover">
              <img src={gal3} alt="" />
            </div>
            <div class="galary--img--cover">
              <img src={gal4} alt="" />
            </div>
            <div class="arrows">
              <i class="ri-arrow-right-s-line"></i>
              <i class="ri-arrow-left-s-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    </body>

            <style>{`
            @import url("https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600&display=swap");

            ::-webkit-scrollbar {
              width: 5px;
            }
            
            ::-webkit-scrollbar-track {
              background: none;
            }
            
            /* Handle */
            
            ::-webkit-scrollbar-thumb {
              background: #f1f1f1;
              border-radius: 5px;
            }
            
            /* Handle on hover */
            
            ::-webkit-scrollbar-thumb:hover {
              background: #bab8b6;
            }
            
            * {
              font-family: "Golos Text", sans-serif;
              box-sizing: border-box;
              padding: 0;
              margin: 0;
            }
            
            body {
              height: 100vh;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              background-image: url(${bali1});
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            
            .dashboard {
              width: 900px;
              min-height: 550px;
              border: 5px solid #f1f1f1;
              border-radius: 2rem;
              overflow: hidden;
              display: flex;
            }
            
            .sidebar {
              padding: 1.2rem 10px;
              background-color: #177edf;
            }
            
            .logo {
              margin-bottom: 100px;
              color: #fff;
            }
            
            .logo span {
              font-size: 1.5rem;
              font-weight: 700;
            }
            
            .sidebar--links {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 25px;
              font-size: 1.2rem;
            }
            
            .sidebar--link {
              color: #d3d5e8;
              cursor: pointer;
            }
            
            .sidebar--link:hover {
              color: #fff;
            }
            
            .main {
              display: grid;
              grid-template-columns: 1fr 1fr;
              width: 100%;
            }
            
            .left {
              padding: 1.5rem;
              background-color: rgba(204, 238, 238, 0.5);
              backdrop-filter: blur(5px);
            }
            
            .search {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid #999;
              padding-bottom: 5px;
              margin-bottom: 1rem;
            }
            
            input {
              width: 100%;
              border: none;
              background-color: transparent;
              outline: none;
            }
            
            .search--icon {
              color: #999;
            }
            
            .img--cover {
              position: relative;
              width: 70px;
              height: 70px;
              overflow: hidden;
              border-radius: 1rem;
            }
            
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            
            p {
              font-size: 12px;
            }
            
            .stays {
              margin-top: 1rem;
              padding-right: 5px;
              display: grid;
              gap: 10px;
              height: 400px;
              overflow-y: scroll;
            }
            
            .stay {
              display: flex;
              gap: 1rem;
              background: #e7f7f6;
              padding: 8px;
              border-radius: 1rem;
            }
            
            h2 {
              color: #222;
            }
            
            .stay--details h4 {
              color: #222;
            }
            
            .stay--details h6 {
              color: #555;
              font-weight: normal;
            }
            
            .rating {
              display: flex;
              gap: 5px;
              margin-top: 5px;
            }
            
            .rating i {
              color: #177edf;
            }
            
            .right {
              padding: 1.5rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              border-radius: 1.5rem;
            }
            
            .profile--cover {
              position: relative;
              height: 1.5rem;
              width: 1.5rem;
              border-radius: 50%;
              overflow: hidden;
            }
            
            .profile {
              display: flex;
              align-items: center;
              gap: 5px;
              background: rgba(255, 255, 255, 0.5);
              backdrop-filter: blur(1px);
              width: fit-content;
              padding: 5px 10px;
              border-radius: 0.5rem;
              margin-left: auto;
            }
            
            .title--container {
              color: #fff;
              margin-top: 4rem;
            }
            
            .title--container h4 {
              font-weight: lighter;
              font-size: 1.2rem;
            }
            
            .title--container h1 {
              font-size: 3rem;
            }
            
            .btn {
              border: 1px solid #fff;
              width: fit-content;
              padding: 7px 13px;
              border-radius: 0.6rem;
              margin-top: 1rem;
              cursor: pointer;
            }
            
            .galary--img--cover {
              position: relative;
              height: 50px;
              width: 50px;
              border-radius: 0.8rem;
              overflow: hidden;
            }
            
            .galary {
              margin-left: auto;
              background: rgba(255, 255, 255, 0.5);
              backdrop-filter: blur(1px);
              padding: 5px;
              display: flex;
              gap: 5px;
              border-radius: 1rem;
            }
            
            .arrows {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              padding: 8px 2px;
              background-color: #fff;
              border-radius: 1rem;
            }
            

            `}</style>
        </>
    );
}
