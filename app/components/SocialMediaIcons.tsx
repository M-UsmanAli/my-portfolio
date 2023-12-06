interface Props {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

const SocialMediaIcons = ({ facebook, instagram, linkedin, twitter }: Props) => {
  return (
    <div className="social-icons">
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.svg" alt="Facebook" />
        </a>
      )}

      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img src="/path/to/instagram-icon.svg" alt="Instagram" />
        </a>
      )}

      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" />
        </a>
      )}

      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img src="/path/to/twitter-icon.svg" alt="Twitter" />
        </a>
      )}
    </div>
  );
};

export default SocialMediaIcons;
