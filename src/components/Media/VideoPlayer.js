import React, { useRef, useEffect, useImperativeHandle } from "react";
import Hls from "hls.js";

function VideoPlayer({ url }, ref) {
  const videoRef = useRef();
  const playerRef = useRef();

  useImperativeHandle(ref, () => ({
    get player() {
      return playerRef.current;
    },
  }));

  useEffect(() => {
    function initPlayer() {
      if (Hls.isSupported()) {
        const hls = new Hls();
        playerRef.current = hls;

        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(url);
        });
      }
    }

    initPlayer();

    return () => {
      const player = playerRef.current;
      if (player) {
        player.destroy();
      }
    };
  }, [url]); // QUESTION FOR THE STUDENTS, DO WE NEED TO ADD THE REF IN THE DEPS ARRAY?

  return (
    <video
      controls={true}
      autoPlay={false}
      style={{ width: "300px" }}
      ref={videoRef}
    />
  );
}

export default React.forwardRef(VideoPlayer);
