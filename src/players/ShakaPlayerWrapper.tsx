import * as React from 'react';
import ShakaPlayer from 'shaka-player-react';
import styled from 'styled-components';
import 'shaka-player/dist/controls.css';

export type TProps = {};

const ShakaPlayerWrapper: React.FC<TProps> = (props: TProps) => {
  return (
    <Wrapper>
      <ShakaPlayer src='https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default ShakaPlayerWrapper;
