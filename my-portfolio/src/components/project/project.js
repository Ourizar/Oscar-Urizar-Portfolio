import React from 'react'
import './project.css'

function project(){
    return(
        <div>
        <section class="hero-banner">
    <div>
    <h2>Full Stack Web Developer!</h2>
    </div>
</section>
<main class = 'page-wrapper'>
     {/* <!--This is the about me section  --> */}
     <section class="page-section" id="about">
        <h2>About Me</h2>
        <div>
        <img src="../src/assets/myProfile.jpg/" alt="myProfilePicture" width ='100px' />
          <p>
            My name is Oscar Urizar! Welcome to my portfolio page. I am currently
            enrolled in the GA Tech coding bootcamp and am learning a lot about
            web development. On this page I will be able to showcase my projects
            for you to see. I have worked in the Dental field since I joined the
            workforce, but technology has always attracted me. I have taken the
            leap and am well on my way to becoming a Full-Stack Developer. Please
            navigate through my page to see more about my work, and contact
            information.
          </p>
          <p>
            I have enrolled in the GA Tech Coding Bootcamp for Full Stack Web Development
            and I'm working on receiving my certificate. I have learned several skills along
            the way which include: Agile Methodology, API's, BootStrap, CSS, Express.js, GitHub, 
            HTML5, JavaScript, jQuery, MVC, OOP, ORM, Nodejs, NoSQL, SQL, Sequelize, MERN,
            MongoDB, Mongoose, and REACT. I also have an Associates Degree in Computer Science 
            in which I learned Java and C#.
          </p>
        </div>
      </section>
{/* My portfolio/ work container */}
<section class="page-section" id="work">
    <h2>Work</h2>
    <div class="flex-container">
      
      <a href="https://salty-brushlands-54641.herokuapp.com/" class="flex-item the-null-report">
        <div>
          <h3>The Null Report</h3>
          <span>Express, MySql2, Handlebars, AWS-SDK, dotenv, bcrypt, Sequelize, Multer</span>
        </div>
      </a>
      <a href="https://caitlinw29.github.io/pokeBattle/" class="flex-item poke-battle">
        <div>
          <h3>Poke Battle</h3>
          <span>API's, Javascript, BootStrap</span>
        </div>
      </a>
      <a href="https://dry-river-00381.herokuapp.com/" class="flex-item workout-tracker">
        <div>
          <h3>Workout Tracker</h3>
          <span>MongoDB, Mongoose, Express, Node.js</span>
        </div>
      </a>

  
      <a href="https://github.com/Ourizar/Note-Taker" class="flex-item note-taker">
        <div>
          <h3>Note Taker</h3>
          <span>Node.js, Express</span>
        </div>
      </a>
      
      <a href="https://ourizar.github.io/Project-Planner/" class="flex-item project-planner">
        <div>
          <h3>Project Planner</h3>
          <span>HTML, CSS, jQuery</span>
        </div>
      </a>
    </div>
  </section>
    </main>
    </div>
)
}


export default project