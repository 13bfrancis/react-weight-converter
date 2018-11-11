import React from 'react';
import ReactDOM from 'react-dom';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import ConvertedUnits from './ConvertedUnits';

import './styles.css';

class App extends React.Component {
  state = {
    weight: '',
    selectedUnit: '',
    units: ['pounds', 'kilograms', 'ounces', 'tons']
  };
  handleChangeText = e => {
    if (!!e.target.value.match(/^[0-9]*$/)) {
      this.setState({
        weight: e.target.value
      });
    }
    return;
  };
  render() {
    const { units, selectedUnit, weight } = this.state;
    return (
      <>
        <Toolbar style={{ justifyContent: 'center' }}>
          <FormControl style={{ flexGrow: 1 }}>
            <InputLabel>Enter Weight</InputLabel>
            <Input
              value={this.state.weight}
              onChange={this.handleChangeText}
              style={{ marginRight: '10px' }}
            />
          </FormControl>
          <FormControl style={{ flexGrow: 0.5 }}>
            <InputLabel>Unit</InputLabel>
            <Select
              value={selectedUnit}
              onChange={e => {
                this.setState({ selectedUnit: e.target.value });
              }}
            >
              {units.map(unit => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
        {selectedUnit !== '' && weight !== '' && (
          <ConvertedUnits
            units={units}
            selectedUnit={selectedUnit}
            weight={parseInt(weight)}
          />
        )}
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
