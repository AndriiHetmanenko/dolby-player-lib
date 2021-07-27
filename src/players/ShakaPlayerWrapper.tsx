import * as React from 'react';
import ShakaPlayer from 'shaka-player-react';
import muxjs from 'mux.js';
import styled from 'styled-components';
import 'shaka-player/dist/controls.css';
import { HLS_MANIFEST_URL } from '../core/config';

//MuxJS needs for launch HLS format manifest
declare global {
  interface Window { muxjs: any; }
}
window.muxjs = muxjs;

export type TProps = {};

const ShakaPlayerWrapper: React.FC<TProps> = (props: TProps) => {
  return (
    <Wrapper>
      <ShakaPlayer src={HLS_MANIFEST_URL} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default ShakaPlayerWrapper;
