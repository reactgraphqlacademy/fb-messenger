import React, { useEffect } from "react";
import Hls from "hls.js";

function VideoPlayer({ url }) {
  // 🚧 Bonus use React.useImperativeHandle to define a handle for easily referencing the player. Eg. to add events to it from a parent component
  // React.useImperativeHandle(ref, () => ({}));

  useEffect(() => {
    function initPlayer() {
      if (Hls.isSupported()) {
        const hls = new Hls();

        // https://github.com/video-dev/hls.js/blob/master/docs/API.md#second-step-instantiate-hls-object-and-bind-it-to-video-element
        const element = null; // 🚧 You need to add the video dom element here. Hint, use the useRef hook
        hls.attachMedia();
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(url);
        });
      }
    }

    initPlayer();

    // 🚧 clean up: player.destroy();
  }, [url]); //  🚧 Question, if you used a ref inside the effect, do you need to add the ref to the deps array?

  return <video controls={true} autoPlay={false} style={{ width: "300px" }} />;
}

export default VideoPlayer;
