import PropTypes from "prop-types";

const ProjectCard = ({
  description,
  imageSrc,
  altText,
  link,
  className = "",
}) => {
  return (
    <div className={`estilo1 ${className}`}>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={altText} className="imgP" />
      </a>
    </div>
  );
};

// Declaração das props
ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string, // opcional
};

export default ProjectCard;
