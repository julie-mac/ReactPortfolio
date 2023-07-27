import React from 'react';
import myPicture from "../assets/me.png";

const About = () => {
    return (
        <section className='about'>
            <h2>About Me</h2>
            <img src={myPicture} alt="Me"/>
            <p>Hi there! I'm Julie, a passionate and detail-oriented junior developer based in Toronto. With a strong foundation in web development and a creative mindset, I strive to create user-friendly and visually appealing websites that deliver exceptional user experiences.</p>
            <p>I embarked on my web development journey earlier this year, and since then, I have been captivated by the ever-evolving world of technology. I've had the opportunity to work on a diverse range of projects, from building responsive web applications to crafting interactive user interfaces.</p>
            <p>My technical toolkit includes proficiency in a variety of programming languages, frameworks, and tools. Some of the technologies I'm well-versed in include:</p>
            <ul>
                <li>Front-end: HTML, CSS, JavaScript (ES6+), React.js, Bootstrap</li>
                <li>Back-end: Node.js, Express.js, MongoDB</li>
                <li>Version Control: Git, GitHub</li>
                <li>Other: RESTful APIs, Responsive Web Design, Web Accessibility (WCAG)</li>
            </ul>
            <p>As a problem-solver at heart, I relish the challenges that web development presents. I enjoy breaking down complex problems into manageable tasks and finding innovative solutions. My attention to detail and ability to think critically enable me to deliver high-quality code and seamless user experiences.</p>
            <p>Having worked in diverse teams, I understand the importance of effective collaboration and communication. I thrive in a team environment, valuing open discussions and collective brainstorming to bring the best ideas to life. I believe that collaboration is the key to unlocking creativity and achieving remarkable results.</p>
            <p>When I'm not immersed in code, you can find me enjoying time with my friends and family, or spending time outside in nature. I believe that balance is essential, and these activities help me recharge and stay motivated.</p>
            <p></p>
        </section>
    )
}

export default About;