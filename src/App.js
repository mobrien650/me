import React, { Component } from 'react';
import './App.css';

import Panel from './components/Panel';
import Icon from './components/Icon';
import ButtonLink from './components/ButtonLink';
import Skills from './components/Skills';

class App extends Component {
  state = { 
    bioSection: "nano"
  }

  handleBioClick = (text) => {
    this.setState({
      bioSection: text
    })
  }

  addShow(sectionName) {
    if(this.state.bioSection === sectionName) {
      return "show"
    }
  }

  photoSlider = () => {
    const photoTimerSeconds = 2.5;
    const photoSlides = document.getElementById('photoSlider').children;
    let currentSlide = 0;
    setInterval( function() {
        photoSlides[currentSlide].classList.remove('Active');
        currentSlide = (currentSlide + 1) % photoSlides.length; // using modulus allows it to loop once reaching end e.g. 7/7=1 so remainder is 0 so it goes to 1st slide
        photoSlides[currentSlide].classList.add('Active');
    }, photoTimerSeconds * 1000)
  }

  componentDidMount() {
    this.photoSlider();
  }

  render() {
    return (
      <main className="App">
          <nav className="Social-Nav flex">
            <Icon url="https://github.com/cathyob" className="Social-Item" classList="Social-Icon Github" background={require('./resources/images/icons/github1.svg')} ariaLabel="Github" />
            <Icon url="https://www.linkedin.com/in/cathyob/" className="Social-Item" classList="Social-Icon LinkedIn" background={require('./resources/images/icons/linkedin2.svg')} ariaLabel="LinkedIn" />
            <Icon url="https://twitter.com/cathyobrien09" className="Social-Item" classList="Social-Icon Twitter" background={require('./resources/images/icons/twitter.svg')} ariaLabel="Twitter" />
            <Icon url="https://www.instagram.com/cathyobrien09/" className="Social-Item" classList="Social-Icon Instagram" background={require('./resources/images/icons/instagram.svg')} ariaLabel="Instagram" />
            <ButtonLink href="https://drive.google.com/file/d/1rRx24-9_VCV0aHWZ8e4DbRrCh-Iwgv_w/" classList="Resume" target="_blank" text="Resume"></ButtonLink>
          </nav>
          <Panel>
            <div className="Me" id="photoSlider">
              <img alt="" src={require('./resources/images/me.jpg')} className="Active" />
              <img alt="" src={require('./resources/images/me2.jpg')} />
              <img alt="" src={require('./resources/images/me3.jpg')} />
              <img alt="" src={require('./resources/images/me4.jpg')} />
              <img alt="" src={require('./resources/images/me5.jpg')} />
           </div>
           <h1 className="script spacing-bottom centered">Cathy O'Brien</h1>
            <div className="spacing centered">
              <h4>Front End Engineer</h4>
              <h4>Greater Boston</h4>
            </div>
          </Panel>
          <Panel>
            <h2 className="script">About Me</h2>
            <nav className="spacing flex" style={{marginLeft: "-8px"}}>
              <ButtonLink text="nano" onClick={this.handleBioClick} active={this.state.bioSection === "nano"} ariaLabel="See my nano bio"></ButtonLink>
              <ButtonLink text="short" onClick={this.handleBioClick} active={this.state.bioSection === "short"} ariaLabel="See my short bio"></ButtonLink>
              <ButtonLink text="medium" onClick={this.handleBioClick} active={this.state.bioSection === "medium"} ariaLabel="See my medium bio"></ButtonLink>
              <ButtonLink text="long" onClick={this.handleBioClick} active={this.state.bioSection === "long"} ariaLabel="See my long bio"></ButtonLink>
            </nav>
            <div className={["desc", "nano", this.addShow("nano")].join(" ")}>
              <p>Hi, I'm Cathy and I am a front end engineer in the Boston area! I enjoy working with collaborative teams and have most recently used Stencil.js as part of a framework agnostic design system. Being active in the community is very important to me so I work with Women Who Code and Tech Ladies.</p>
            </div>
            <div className={["desc", "short", this.addShow("short")].join(' ')}>
              <p>Hi, I'm Cathy and I am a front end engineer in the Boston area!</p>
              <p>I am a career changer who decided to switch to tech after 7 years in the insurance industry, so I attended a full stack development bootcamp in 2017 and fell in love again with front end web development. I enjoy working with collaborative teams and have most recently used Stencil.js as part of a framework agnostic design system.</p>
              <p>Being active in the community is very important to me so I am a Director for Women Who Code Boston and a community manager for Tech Ladies.</p>
            </div>
            <div className={["desc", "medium", this.addShow("medium")].join(' ')}>
              <p>Hello! My name is Cathy and I am a front end engineer in the Boston area!</p>
              <p>I am a career changer who decided to switch to tech after 7 years in customer representative and account management roles in the insurance industry. In 2017 I attended a full stack development bootcamp so that I could transition to a career in tech and fell in love again with front end web development.</p>
              <p>I've worked in an in-house custom CMS using jQuery creating semi-custom front ends for each client and in an in-house design system using Stencil.js as a framework agnostic component library building components that can be used in projects using React, Angular, plain Javascript, and more. I love to work on collaborative teams to find the best solution using the right tools for that specific project.</p>
              <p>Giving back to the tech community is very important to me so I am involved with Women Who Code as a Director in Boston and with Tech Ladies as a community manager on a private platform.</p>
            </div>
            <div className={["desc", "long", this.addShow("long")].join(' ')}>
              <p>Hello! My name is Cathy and I am a front end engineer in the Boston area!</p>
              <p>I am a transplant from Texas that moved to Boston on a whim in 2015 for change and adventure! I've set down roots, cheer for (almost) all the Boston teams, and know to say the singular version of "Boston Common".</p>
              <p>I first picked up HTML and CSS in high school and used it as a hobby for 4-5 years for friends and student groups in college. Then after 7 years in the insurance industry in customer representative and account management roles I decided to kickstart a career in web development so I enrolled in a web developer bootcamp!</p>
              <p>Since then, I've worked as a front end engineer with a digital marketing company working on an in-house custom CMS using jQuery creating semi-custom front ends for each client, and then in  an in-house design system using Stencil.js as a framework agnostic component library. I love to work on collaborative teams to find the best solution using the right tools for that specific project.</p>
              <p>Web development gives me the chance to do something creative and fulfilling, and provides the opportunity for continual growth and creativity that I was looking for in my career. I am passionate about giving back to the community so I am a Director for Women Who Code in Boston and a community manager for Tech Ladies on a private platform.</p>
            </div>
          </Panel>
          <Panel>
            <h2 className="script">Skills</h2>
            <Skills title="Coding" items={["HTML5", "CSS", "Flexbox", "SASS", "jQuery", "JavaScript", "Stencil.js", "React", "Git", "Responsive Web"]}></Skills>
            <Skills title="Tools" items={["Github", "Sourcetree", "JIRA", "Confluence", "Scrum"]}></Skills>
          </Panel>

      </main>
    );
  }
}
export default App;
