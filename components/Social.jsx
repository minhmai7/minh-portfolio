import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/minhmai7"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/itsminhmai/"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/anhminh.mai.127"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/minhmaiii17/"},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <a 
                key={index} 
                href={item.path} 
                className={iconStyles}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.icon}
            </a>
        })}
    </div>
  )
}

export default Social;