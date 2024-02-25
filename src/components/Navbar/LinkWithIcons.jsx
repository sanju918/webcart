import { NavLink } from "react-router-dom";
import "./LinkWithIcons.css";

const LinkWithIcons = ({ title, link, emoji, sidebar }) => {
  return (
    <>
      <NavLink
        to={link}
        className={sidebar ? "align_center sidebar_link" : "align_center"}
      >
        {title}
        <img src={emoji} alt="Building Icon" className="link_emoji" />
      </NavLink>
    </>
  );
};

export default LinkWithIcons;
