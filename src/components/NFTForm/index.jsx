import React from "react";
import styled from "styled-components";
import { mixins } from "../../styles/global.styles";

import UploadPic from "../UploadPic";

const NFTForm = ({ closeForm, setNFTData, nftData }) => {
  const [selectedUserImg, setSelectedUserImg] = React.useState(null);
  const [formData, setFormData] = React.useState(null);
  React.useEffect(() => {
    if (nftData) {
      if (nftData?.nft_img) setSelectedUserImg(nftData?.nft_img);
      setFormData({
        nft_name: nftData?.nft_name,
        nft_description: nftData?.nft_description,
      });
    }
  }, []);

  const recordResponse = (e) => {
    const data = { key: e.target.name, val: e.target.value };
    setFormData((prev) => ({ ...prev, [data.key]: data.val }));
  };
  function file2Base64(file) {
    console.log("file", file);
    if (file !== undefined) {
      setSelectedUserImg((prev) => ({
        ...prev,
        imgFile: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedUserImg((prev) => ({
          ...prev,
          imgPrev: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedUserImg(null);
    }
  }
  const userImgUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    file2Base64(file);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (selectedUserImg?.imgFile) {
      setNFTData({ ...formData, nft_img: selectedUserImg });
      closeForm();
    } else {
      alert("Pls upload nft image!");
    }
  };
  return (
    <NFTFormCtr>
      <button onClick={closeForm}>Close</button>
      <UploadPic
        onChange={userImgUpload}
        src={selectedUserImg?.imgPrev}
        name="nft"
      />
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter NFT name..."
          onChange={recordResponse}
          required
          name="nft_name"
          defaultValue={nftData?.nft_name}
        />
        <input
          type="text"
          placeholder="Enter NFT description..."
          onChange={recordResponse}
          required
          name="nft_description"
          defaultValue={nftData?.nft_description}
        />
        <button className="submit">Submit</button>
      </form>
    </NFTFormCtr>
  );
};

const NFTFormCtr = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.8);
  ${mixins.flexColCenter}
  gap:1rem;
  form {
    ${mixins.flexColCenter}
    gap:1rem;
    input {
      padding: 0.5rem;
    }
  }
`;
export default NFTForm;
