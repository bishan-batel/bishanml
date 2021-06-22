import React from "react";
import "./goosepack.scss";

export default (() => {
  const downloadLink = "https://www.dropbox.com/s/8mej9j0orh1fujo/Southbrit%20Goose%20Pack%20v0.3.zip?dl=1";

  return (
    <div className="goosepack">
      <h1 className="header">Vibrant Server Minigames</h1>
      <div className="pack-details">
        <p>
          This texturepack is for use for all current and upcoming games made by
          Southbrit Goose Games for Vibrant comunity server. You <b>need optifine 
            or a minecraft client that has optifine embeded such as BL or Lunar.</b>
            <br />
          You do not need to redownload
        </p>

        <div className="download">
          <a href={downloadLink}>Download</a>
          <h2 className="version">
            <b>v0.3</b>
          </h2>
        </div>
      </div>
    </div>
  );
}) as React.FC;
