import * as React from 'react';
import styled from 'styled-components';
import { Ref, useEffect, useRef } from 'react';
import videojs from 'video.js';
import "video.js/dist/video-js.css";
import { HLS_MANIFEST_URL } from '../core/config';

export type TProps = {};

const VideoJsPlayerWrapper: React.FC<TProps> = (props: TProps) => {
  const videoRef: Ref<HTMLVideoElement> = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        controls: true,
        fluid: true,
        sources: [
          {
            src: HLS_MANIFEST_URL,
            type: 'application/x-mpegURL',
          }
        ],
      })
    }
  });

  return (
    <Wrapper data-vjs-player>
      <video width='1000px' ref={videoRef} className="video-js vjs-theme-city vjs-big-play-centered" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default VideoJsPlayerWrapper;