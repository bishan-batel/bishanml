import React from "react";
import "./goosepack.scss";

export default (() => {
  const downloadLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div className="goosepack">
      <h1 className="header">Vibrant Server Minigames</h1>
      <div className="pack-details">
        <p>
          This texturepack is for use for all current and upcoming games made by
          Southbrit Goose Games for Vibrant comunity server
        </p>

        <div className="download">
          <a href={downloadLink}>Download</a>
          <h2 className="version">
            <b>v1.0</b>
          </h2>
        </div>
      </div>
    </div>
  );
}) as React.FC;
