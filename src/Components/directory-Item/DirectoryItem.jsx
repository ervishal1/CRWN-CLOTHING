import React from "react";
import { useNavigate } from "react-router-dom";
import "./directoryItem.style.jsx";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directoryItem.style.jsx";

const DirectoryItem = ({ title, imageUrl, route }) => {

  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default  DirectoryItem;
