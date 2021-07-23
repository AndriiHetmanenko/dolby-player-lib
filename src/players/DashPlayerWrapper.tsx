import * as React from 'react';
import styled from 'styled-components';
import { Ref, useEffect, useRef } from 'react';
import dashjs from 'dashjs';

export type TProps = {};

const videoSrc = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';

const DashPlayerWrapper: React.FC<TProps> = (props: TProps) => {
  const videoRef: Ref<HTMLVideoElement> = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = dashjs.MediaPlayer().create();

      player.initialize(videoRef.current, videoSrc)
    }
  });

  return (
    <Wrapper>
      <video ref={videoRef} width='100%' controls/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default DashPlayerWrapper;