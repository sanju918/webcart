import "./LinkWithIcons.css";

const LinkWithIcons = ({ title, link, emoji, sidebar }) => {
  return (
    <>
      <a
        href={link}
        className={sidebar ? "align_center sidebar_link" : "align_center"}
      >
        {title}
        <img src={emoji} alt="Building Icon" className="link_emoji" />
      </a>
    </>
  );
};

export default LinkWithIcons;
