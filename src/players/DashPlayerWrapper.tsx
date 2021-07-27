import * as React from 'react';
import styled from 'styled-components';
import { Ref, useEffect, useRef } from 'react';
import dashjs from 'dashjs';
import { DASH_MANIFEST_URL } from '../config';

export type TProps = {};

const DashPlayerWrapper: React.FC<TProps> = (props: TProps) => {
  const videoRef: Ref<HTMLVideoElement> = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = dashjs.MediaPlayer().create();

      player.initialize(videoRef.current, DASH_MANIFEST_URL, false)
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