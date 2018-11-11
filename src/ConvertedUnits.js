import React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const convertedNumber = ({ selectedUnit, unit, weight }) => {
  switch (selectedUnit) {
    case 'pounds':
      if (unit === 'ounces') return weight * 16;
      else if (unit === 'kilograms') return weight / 2.205;
      else if (unit === 'tons') return weight / 2000;
      return;
    case 'kilograms':
      if (unit === 'ounces') return weight * 35.274;
      else if (unit === 'pounds') return weight * 2.205;
      else if (unit === 'tons') return weight / 907.185;
      return;
    case 'ounces':
      if (unit === 'pounds') return weight / 16;
      else if (unit === 'kilograms') return weight / 35.274;
      else if (unit === 'tons') return weight / 32000;
      return;
    case 'tons':
      if (unit === 'ounces') return weight * 32000;
      else if (unit === 'pounds') return weight * 2000;
      else if (unit === 'kilograms') return weight * 907.185;
      return;
    default:
      return;
  }
};

export default ({ units, selectedUnit, weight }) => (
  <List>
    {units.map(unit => (
      <>
        {unit === selectedUnit ? (
          ''
        ) : (
          <Paper key={unit} elevation={1} style={{ margin: '5px 0' }}>
            <ListItem>
              <ListItemText>
                {convertedNumber({
                  selectedUnit,
                  unit,
                  weight
                })}
              </ListItemText>
              <ListItemText style={{ textAlign: 'right' }}>{unit}</ListItemText>
            </ListItem>
          </Paper>
        )}
      </>
    ))}
  </List>
);
