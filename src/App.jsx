import React from 'react';
import me from './img/sepia.jpg';
import './App.scss';
import Description from './Components/Description';
import Name from './Components/Name';
import Logos from './Components/Logos';

import { Card, Content, Container } from 'react-bulma-components';
import styles from './App.module.scss';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={me} 
            className="App-logo" 
            alt="rodrigo-tripp "/>
          </div>
        <Name></Name>
        <Logos/>
        <Description></Description>
      </header>
      <Container className={ styles.Container} max="true"
        breakpoint="tablet">
        <Card className={styles.card_container}>
          <Card.Image src={me}></Card.Image>
          <Card.Content>
            <Content>
            <div>
              <p>
                Mexican, living in Helsinki.
                Full stack developer with a strong UX and UI development experience.
              </p>
              <p>Road cycling, music and bouldering keep me busy.</p>
              <p>Working for <a href="https://marimekko.com"target="_blank" rel="noopener noreferrer">marimekko</a></p>
            </div>
            </Content>
          </Card.Content>
        </Card>
      </Container>
      
    </div>
  );
}

export default App;
