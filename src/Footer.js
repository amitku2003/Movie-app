import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="call-me">
                    Questions? Call me <span>+91 6201741453</span>
                </div>
                <div className="social-media">
                    <a href="https://www.instagram.com/real_amit_kr/" target="_blank">
                        <div className="insta">
                            <InstagramIcon sx={{ fontSize: 30 }} />
                        </div>
                    </a>
                    <a href="https://github.com/amitku2003" target="_blank">
                        <div className="git">
                            <GitHubIcon sx={{ fontSize: 30 }} />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Footer;