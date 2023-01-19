import styled from "styled-components";
import { mixins } from "../../styles/global.styles";

const UploadPic = ({ onChange, src, name, styles, size, edit, styleProps }) => {
  return (
    <ImgUploadCtr
      className="cardBg"
      style={styles ? styles : {}}
      size={size}
      {...styleProps}
    >
      <label className="_custom-file-upload">
        <div className="_img-wrap _img-upload">
          {src && src !== "null" && src !== "undefined" ? (
            <img src={src} alt="" />
          ) : (
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&usqp=CAU`}
              alt=""
              className="img_placeholder"
            />
          )}
        </div>
        <input
          id="photo-upload"
          type="file"
          name={name}
          onChange={onChange}
          accept="image/x-png,image/gif,image/jpeg,image/webp"
        />
      </label>
    </ImgUploadCtr>
  );
};

const ImgUploadCtr = styled.div`
  gap: 1rem;
  position: relative;
  ${mixins.flexRowCenter}
  border: 1px solid #fff;
  border-radius: 1rem;
  width: fit-content;
  padding: 2rem;
  ._custom-file-upload {
    border-radius: 1rem;
    display: inline-block;
    position: relative;
    cursor: pointer;
    border: ${(props) =>
      `2px solid ${props.borderColor}` ?? "2px solid var(--color-imp)"};
  }
  ._img-wrap {
    min-width: 120px;
    min-height: 120px;
    max-width: 150px;
    max-height: 150px;
    width: 15vw;
    height: 15vw;
    overflow: hidden;
    ${mixins.gridCenter}
    border-radius: 1rem;
    .img_placeholder {
      background: var(--btn-color-x02);
    }
    img {
      object-position: center;
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius);
    }
  }
`;

export default UploadPic;
