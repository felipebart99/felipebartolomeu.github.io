import PropTypes from "prop-types";

const ProjectCard = ({
  description,
  imageSrc,
  altText,
  link,
  github,
  className = "",
}) => {
  return (
    <div className={`estilo1 ${className}`}>
      <p>
        {description} <br />
        {github && (
          <span>
            <a href={github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </span>
        )}{" "}
      </p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={altText} className="imgP" />
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

// Declaração das props
ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string,
  className: PropTypes.string,
};

export default ProjectCard;
