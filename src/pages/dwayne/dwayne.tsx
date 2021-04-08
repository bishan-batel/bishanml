import React from "react";
import "./dwayne.css";

const TagsField: React.FC<{ tag: string }> = ({ tag }) => {
  return <input defaultValue={tag} className="dwayne-tag-field" />;
};

const Tags: React.FC = () => {
  return (
    <ul className="dwayne-tags">
      <TagsField tag="Block" />
      <TagsField tag="Rock" />
      <TagsField tag="Clock" />
      <TagsField tag="Mock" />
      <TagsField tag="Block" />
      <TagsField tag="Shock" />
      <TagsField tag="Lock" />
      <TagsField tag="Glock" />
      <TagsField tag="Sock" />
      <TagsField tag="Glock" />
      <TagsField tag="Barrack" />
      <TagsField tag="Croc" />
      <TagsField tag="Stock" />
      <TagsField tag="Flock" />
      <TagsField tag="Bedrock" />
      <TagsField tag="Bach" />
      <TagsField tag="Dock" />
      <TagsField tag="" />
      {/* <TagsField tag="" /> */}
    </ul>
  );
};

export default (() => {
  return (
    <div className="dwayne">
      <h1>Dwayne The Rock Generator</h1>
      <div className="dwayne-content">
        <Tags />
      </div>
    </div>
  );
}) as React.FC;
