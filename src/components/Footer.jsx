import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="footer w-full py-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="author flex items-center gap-2">
          <p className="smallText font-normal">Build by: </p>
          <p className="smallText font-medium">Emiliano Lopez</p>
        </div>
        <div className="links flex items-center gap-3">
          <div className="github-link flex items-center">
          <Icon
              icon="mdi:github"
              style={{ fontSize: "24px", color: "#610F7F" }}
            />
            <a target="_blank" href="https://github.com/EmiLzLz">Github</a>
          </div>
          <div className="linkedin-link flex items-center">
          <Icon
              icon="bi:linkedin"
              style={{ fontSize: "22px", color: "#610F7F" }}
            />
            <a target="_blank" href="https://www.linkedin.com/in/emiliano-lopez-lopez">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
