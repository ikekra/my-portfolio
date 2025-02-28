import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I’m a passionate Web Developer with a love for creating clean, responsive, and user-friendly websites. 
                I enjoy turning ideas into interactive digital experiences.Whether it's building sleek UI components, optimizing performance, or diving into backend logic, I thrive on solving problems and bringing designs to life.
                Beyond coding, I’m always exploring new technologies, staying updated with modern web trends, and contributing to open-source projects. 
                I believe in writing efficient, scalable code while keeping the user experience at the heart of every project. When I’m not coding, you’ll
                 probably find me learning about AI, working on side projects, or sharing knowledge with the community.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>A highly creative and detail-oriented Website Designer with a strong foundation in HTML, CSS, JavaScript, and Tailwind CSS. 
                            Specializing in crafting visually compelling, responsive, and user-centric web designs that align with modern UI/UX principles.
                             Proficient in designing intuitive interfaces, optimizing user experience, and implementing the latest web design trends. 
                             Adept at collaborating with developers, clients, and stakeholders to translate ideas into high-performance digital experiences. 
                             Committed to delivering aesthetically appealing and functionally robust websites that enhance brand presence and user engagement..</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Content writer</h2>
                        <p>Technical, Educational, and Sports Content Writer
                        A skilled and versatile content writer specializing in technical, educational, and sports content.
                        Passionate about simplifying complex technical concepts, creating insightful educational materials,
                        and delivering engaging sports articles. Experienced in writing well-researched blog posts, articles
                        , tutorials, and website content optimized for SEO. Adept at breaking down technical topics, explaining
                         academic concepts, and analyzing sports trends to provide valuable and informative content. Strong research, 
                         storytelling, and content strategy skills to engage diverse audiences and enhance readability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;