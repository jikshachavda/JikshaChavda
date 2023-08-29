import React from 'react'
import Navbar from './Navbar'
import './index.css'
import './Home.css'
import HomeBg from './image/Home-bg.svg'
import Fiverr from "./image/fiverricon.png"
import insta from "./image/instaicon.png"
import linkedin from "./image/linkedinicon.png"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="Home-container">
                <div className="Home-content">
                <h1 className="hello">hello, my name is</h1>
                    <h1 className="name">jiksha chavda</h1>
                    <h2 className="skill">i am <span>web developer</span></h2>
            <p>my name is jiksha chavda. i am frontend web developer using HTMl, Css and Javascript. and i am using frameworks React js , sass and Bootstrap</p>
                    <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.fiverr.com/jikshachavda/front-end-web-development-in-react-js-html-css-javascript-bootstrap-and-sass"
                target="Jiksha chavda">
                <img src={Fiverr} alt="" className='icon fiverr'/>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jecks_developer/"
                target="Jiksha chavda">
                <img src={insta} alt="" className='icon insta'/>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jiksha-chavda/"
                target="Jiksha chavda">
                <img src={linkedin} alt="" className='icon linkedin'/>
              </a>
            </li>
          </ul>
          </div>
                </div>
                <div className="Home-image">
                    <img src={HomeBg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home
