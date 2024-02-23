import "./LinkWithIcons.css";

const LinkWithIcons = ({ title, link, emoji }) => {
  return (
    <>
      <a href={link} className="align_center">
        {title}
        <img src={emoji} alt="Building Icon" className="link_emoji" />
      </a>
    </>
  );
};

export default LinkWithIcons;
