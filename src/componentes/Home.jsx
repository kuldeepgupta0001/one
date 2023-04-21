import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";


const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your and only solution to the tech problems you face every day.
                we are leading tech company whose aim is to increase the problem 
                solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Beatae necessitatibus ipsum esse culpa accusantium exercitationem officia 
             perspiciatis tempore accusamus nemo sit voluptatem ducimus, nulla
              doloremque debitis quae atque, nihil sapiente est impedit repellat 
              commodi unde? Quis rem commodi veniam, repudiandae consectetur ex vero 
              dolor?!</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>


            <article>
            <div style={{animationDelay: "0.3s"}}>
            <a href="https://google.com/chrome/" target={"blank"}>

                <AiFillGoogleCircle />
                <p>Google</p>
                </a>
            </div>

            <div style={{animationDelay: "0.5s"}}>
            <a href="https://amazon.com/" target={"blank"}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
            </a>
        </div>
        
        <div style={{animationDelay: "0.7s"}}>
        <a href="https://youtube.com/" target={"blank"}>
            <AiFillYoutube />
            <p>Youtube</p>
            </a>
        </div>
        
        <div style={{animationDelay: "1s"}}>
        <a href="https://instagram.com/" target={"blank"}>
            <AiFillInstagram />
            <p>Instagram</p>
            </a>
        </div>
        </article>


       
        </div>
    </div>
    </>
  )
};

export default Home