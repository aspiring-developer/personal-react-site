import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <>
      <div className="text-center mb-3 socialIcons">
        <p>
          <a
            className="LinkedInIcon fa-2x"
            href="https://www.linkedin.com/in/shiva-sharma05/"
            target="_blank noopener noreferrer"
          >
            <i className="fab fa-linkedin" style={{ color: "#0e76a8" }}></i>
          </a>
          <a
            className="gitHubIcon fa-2x"
            href="https://github.com/ssh1sharma"
            target="_blank  noopener noreferrer"
          >
            <i
              className="fab fa-github-square"
              style={{ marginLeft: "1rem" }}
            ></i>
          </a>
        </p>
      </div>
    </>
  );
};
export default SocialIcons;
