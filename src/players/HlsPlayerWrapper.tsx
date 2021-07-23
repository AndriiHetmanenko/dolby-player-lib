import * as React from 'react';
import styled from 'styled-components';
import { Ref, useEffect, useRef } from 'react';
import Hls from 'hls.js';

export type TProps = {};

const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

const HlsPlayerWrapper: React.FC<TProps> = (props: TProps) => {
  const videoRef: Ref<HTMLVideoElement> = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();

      hls.loadSource(videoSrc);
      hls.attachMedia(videoRef.current);
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

export default HlsPlayerWrapper;