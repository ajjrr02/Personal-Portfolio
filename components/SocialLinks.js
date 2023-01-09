  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHashnode,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faInstagram,
    link: "https://instagram.com/anassjardane",
    ariaLabel: "instagram",
  },
  { icon: faGithub, link: "https://github.com/ajjrr02", ariaLabel: "github" },
  {
    icon: faHashnode,
    link: "https://hashnode.com/@anassjr02",
    ariaLabel: "hashnode",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/anassjardane/",
    ariaLabel: "linkedin",
  },
  { icon: faTwitter, link: "https://twitter.com/anassjr4", ariaLabel: "twitter" },
  
];

function SocialLinks() {
  return (
    <ul className='flex justify-around sm:px-32 md:px-52'>
      {socialLinks.map((socialLink, index) => {
        return (
          <li key={index}>
            <a
              href={socialLink.link}
              target='_blank'
              rel='noreferrer'
              aria-label={socialLink.ariaLabel}>
              <FontAwesomeIcon
                icon={socialLink.icon}
                className='text-3xl text-custom-light-tarawera duration-300 ease-out hover:text-custom-light-dodger-blue dark:text-custom-dark-off-by-one hover:dark:text-custom-dark-3-days-ecchymose'
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
