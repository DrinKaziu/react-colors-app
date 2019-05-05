import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: 'form',
      newPaletteName: ''
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
      this.props.palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  savePalette = (emoji) => {
    const newPalette = {paletteName: this.state.newPaletteName, emoji: emoji.native}
    this.props.handleSubmit(newPalette);
    this.setState({ open: '' })
  }

  showEmojiPicker = () => {
    this.setState({ open: 'emoji' })
  }

  render() {
    const { newPaletteName } = this.state;
    const { hideForm } = this.props
    return (
      <div>
        <Dialog open={this.state.open === 'emoji'} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">Pick an emoji for your palette</DialogTitle>
          <Picker title="Emoji Picker" onSelect={this.savePalette}/>
        </Dialog>
        <Dialog
          open={this.state.open === 'form'}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Coose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for you new palette. Make sure it's unique!
              </DialogContentText>
              <TextValidator 
                label="Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["palette name is required", "palette name already exists"]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                type="submit"
              >
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;