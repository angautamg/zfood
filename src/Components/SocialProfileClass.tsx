import React, { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa"; // or SiX for "X" logo
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../../public/Common/constants";

class SocialProfileClass extends Component {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="social-media-container">
        <a href={Linkedin_Link} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
          <i><SiLinkedin title="Follow me on Linkedin" /></i>
        </a>
        <a href={Twitter_Link} className="icon-button twitter" target="_blank" rel="noopener noreferrer">
          <i><FaTwitter title="Follow me on Twitter" /></i>
        </a>
        <a href={Github_Link} className="icon-button github" target="_blank" rel="noopener noreferrer">
          <i><SiGithub title="Follow me on Github" /></i>
        </a>
        <a href={Email_Link} className="icon-button email" target="_blank" rel="noopener noreferrer">
          <i><SiGmail title="Any Query! Mail me" /></i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
