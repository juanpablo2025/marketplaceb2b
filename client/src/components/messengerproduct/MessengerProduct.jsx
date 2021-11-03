import "./messengerproduct.css";
import { MoreVert, Edit } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
export default function MessengerProduct({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  "https://ccppasco.sacpro.pe/uploads/member_image/default.jpg"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <Container>
            <img className="postImg" src={PF + post.img} alt="" />
          </Container>
        </div>

        <Divider />
        <div className="postText">{"Nombre:" + post?.desc}</div>

        <div className="postText">{"Precio:" + post?.price}</div>

        <div className="postText">{"Categoria:" + post?.category}</div>

        <div className="postText">{"Peso:" + post?.size}</div>

        <div className="postText">{"Color:" + post?.color}</div>

        <div className="postText">{"En tienda:" + post?.inStock}</div>

        <Divider />
        <div className="postBottomRight">
          {/*<button>
            <div className="postCommentText">
              <Edit></Edit>Editar
          </div>
          </button>*/}
        </div>
      </div>
    </div>
  );
}
