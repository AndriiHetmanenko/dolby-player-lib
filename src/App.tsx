import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Tabs,Tab } from 'react-bootstrap';
import ShakaPlayerWrapper from './players/ShakaPlayerWrapper';
import HlsPlayerWrapper from './players/HlsPlayerWrapper';
import DashPlayerWrapper from './players/DashPlayerWrapper';
import VideoJsPlayerWrapper from './players/VideoJsPlayerWrapper';

function App() {
  return (
    <AppWrapper>
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="shake">
              <Tab eventKey="shake" title="Shake Player">
                <ShakaPlayerWrapper />
              </Tab>
              <Tab eventKey="hls" title="HLS Player">
                <HlsPlayerWrapper />
              </Tab>
              <Tab eventKey="dash" title="DASH Player">
                <DashPlayerWrapper />
              </Tab>
              <Tab eventKey="videoJs" title="VideoJS Player">
                <VideoJsPlayerWrapper />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  margin-top: 20px;
`;

export default App;
