import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Trailer } from '../Trailer/Trailer';
import './SpinningWheel.css';
export default class SpinningWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      trailer: false,
      open: false,
      style: {
        position: 'absolute',
        top: '20%',
        left: '30%',
        transform: 'translate(-50%, -50%)Modal',
        width: '40%',
        bgcolor: 'black',
        p: 4,
        color: 'white'
      }    
    };
    this.selectItem = this.selectItem.bind(this);
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this);
  }

  selectItem() {
    const { itemIds } = this.props;
    
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });

      setTimeout(() => {
        this.setState({trailerId: itemIds[this.state.selectedItem]})
        this.setState({trailer: true})
        this.handleOpen();
      }, 3000)
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  //trailer modal
  handleOpen = () => {
    this.setState({open: true})
  }
  
  handleClose = () => {
    this.setState({open: false})
  };

  render() {
    const { selectedItem, trailer, open, style} = this.state;
    const { items, itemIds } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <>
        <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
            {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                {item}
                </div>
            ))}
            </div>
        </div>
        <div>
          {trailer && 
            <Modal open={open} onClose={this.handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <h4>{items[selectedItem]}
                  <button style={{fontSize:'15px'}}onClick={this.handleClose} className="btn-close">X</button>
                </h4>
                <Trailer id={itemIds[selectedItem]}/> 
              </Box>
           </Modal>
          }
        </div>
      </>
    );
  }
}
