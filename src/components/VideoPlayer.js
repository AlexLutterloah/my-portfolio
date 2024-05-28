import React, { useRef } from 'react';

function VideoPlayer( props ) {
  const playerRef = useRef();

  const closePlayer = (e) => {
    if(playerRef.current === e.target) {
      props.onClose();
    }
  }

  return (
    <div ref={playerRef} onClick={closePlayer} className='video-container'>
      <video
        src={props.source}
        disableRemotePlayback
        loop
        muted
        autoPlay
      />
    </div>
  );
}

export default VideoPlayer;
