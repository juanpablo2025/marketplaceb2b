import "./sidebar.css";
import {
  Add,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Add className="sidebarIcon" />
            <span className="sidebarListItemText">Agregar producto</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Estadisticas</span>
          </li>
        </ul>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {/*{Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}*/}
        </ul>
      </div>
    </div>
  );
}
