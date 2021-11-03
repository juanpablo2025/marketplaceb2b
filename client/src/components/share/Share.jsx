import "./share.css";
import {
  PermMedia,
  /*Label,*/

  /*EmojiEmotions,*/
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);

  const desc = useRef();
  const price = useRef();
  const title = useRef();
  const category = useRef();
  const size = useRef();
  const color = useRef();
  const inStock = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      price: price.current.value,
      category: category.current.value,
      size: size.current.value,
      color: color.current.value,
      inStock: inStock.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div> {"Agrega un nuevo producto"}</div>
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={"https://ccppasco.sacpro.pe/uploads/member_image/default.jpg"}
            alt=""
          />

          <input
            placeholder={"Nombre del producto"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <input placeholder={" Precio"} className="shareInput" ref={price} />
        <hr className="shareHr" />
        <input
          placeholder={" Categoria"}
          className="shareInput"
          ref={category}
        />
        <hr className="shareHr" />
        <input placeholder={" Peso"} className="shareInput" ref={size} />
        <hr className="shareHr" />
        <input placeholder={" Color"} className="shareInput" ref={color} />
        <hr className="shareHr" />
        <input
          placeholder={" En tienda"}
          className="shareInput"
          ref={inStock}
        />
        <hr className="shareHr" />

        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Añade fotos del producto</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className="shareOption"></div>
            {/* <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>*/}
          </div>
          <button className="shareButton" type="submit">
            Vender
          </button>
        </form>
      </div>
    </div>
  );
}
