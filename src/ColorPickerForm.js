import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: ''
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor = (newColor) => {
    this.setState({currentColor: newColor.hex})
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }

    this.props.addNewColor(newColor);
    this.setState({newColorName: ''});
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return(
      <div>
        <ChromePicker 
          color={currentColor} 
          onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
          <TextValidator 
            className={classes.colorNameInput}
            placeholder="Color Name"
            name="newColorName"
            variant="filled"
            margin="normal"
            value={newColorName} 
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={["color name is required", "color name already taken", "color already added"]}
          />
          <Button 
            className={classes.addColor}
            variant="contained" 
            type="submit"
            color="primary" 
            style={{backgroundColor: paletteIsFull ? "grey" : currentColor}} 
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette Is Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);