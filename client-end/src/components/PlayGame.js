import React from 'react';
import { Icon, Button, Grid } from 'semantic-ui-react';

const PlayGame = ({ onBack }) => {
  return (
    <div>
      <Grid centered>
        <Grid.Column mobile={16} computer={16} style={{ position: 'relative' }}>
          <div id="game-launch"></div>
           
          <Button 
            onClick={onBack}
            style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)' }}
          >
            <Icon name="arrow left" />Back
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default PlayGame;
