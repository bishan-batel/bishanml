import React from "react";
import "./goosepack.scss";

export default (() => {
  const downloadLink =
    "https://github.com/bishan-batel/goosepack/archive/refs/heads/main.zip";

  const links = {
    download:
      "https://github.com/bishan-batel/goosepack/archive/refs/heads/main.zip",
    optifine: "https://optifine.net",
    lunar: "https://www.lunarclient.com/",
    badlion: "https://client.badlion.net/",
  };

  return (
    <div className="goosepack">
      <h1 className="header">
        <span className="goose">goose</span>
        <span className="pack">pack</span>
      </h1>
      <div className="pack-details">
        <p>
          <p className="old-description">
            This texturepack is for use for all current and upcoming games made
            by Southbrit Goose Games for Vibrant comunity server.
          </p>
          <p>
            This resource pack used to be mainly for minigames built in
            survival, but now serves the extra purpouse as a dumping ground of
            'funny' ideas me and friends come up with. The pack will continue to
            be used for said mini games but also include some other fun items
            and some quality of life stuff.
          </p>
          <p>
            This texture pack is <b>Unobtrusive</b>, meaning nothing is changed
            in default minecraft unless you rename items certain things. There
            are 2 exceptions: a modified enchantment glint and the removal of
            the pumpkin overlay.
          </p>
        </p>
      </div>

      <div className="download">
        {/* Download warning */}
        <h2 className="description">
          <b>
            For this texture pack to work you will need{" "}
            <a href={links.optifine}>Optifine</a>, or another client with
            Optifine embedded (such as the <a href={links.lunar}>Lunar</a> or{" "}
            <a href={links.badlion}>Badlion</a> Clients)
          </b>
        </h2>

        <div className="download-button-container">
          <a href={downloadLink} className="download-button">
            Download
          </a>
          <span className="version">
            <b>v0.3</b>
          </span>
        </div>
      </div>
    </div>
  );
}) as React.FC;
