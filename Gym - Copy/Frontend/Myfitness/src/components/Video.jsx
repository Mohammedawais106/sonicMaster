import React from 'react';

const Video = () => {
  const greenBarStyle = {
    height: '5px',
    backgroundColor: 'green',
  };

  const videoContainerStyle = {
    paddingTop: '10px',
  };

  return (
    <div>
      <div style={greenBarStyle}></div>
      <div style={videoContainerStyle}>
        <iframe
          width="750"
          height="315"
          src="https://www.youtube.com/embed/4CQUl9IoKiU?si=sbOizxb37yiF63hO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="770"
          height="315"
          src="https://www.youtube.com/embed/csZxnUNrRIg?si=kJvyPCac-tkSVOuL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
