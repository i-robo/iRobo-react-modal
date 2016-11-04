import React, {
  Component
} from 'react';

export default class DeskTopModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isClose = this.isClose.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.isClose);
    window.addEventListener('wheel', this.wheelpreventDefault);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.isClose);
    window.removeEventListener('wheel', this.wheelpreventDefault);
  }

  isClose(e) {
    if (e.keyCode === 27) {
      this.props.isClose();
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'fixed',
            width: '100%',
            height: '1400px',
            left: 0,
            top: 0,
            zIndex: 5000,
          }}
        />
        <div
        style={{
          position: 'fixed',
          width: this.props.isWidth,
          height: this.props.isHeight,
          zIndex: 5500,
          left: '50%',
          top: '50%',
          marginTop: -(this.props.isHeight / 2),
          marginLeft: -(this.props.isWidth / 2),
          backgroundColor: this.props.bgColor,
          boxShadow: '0 1px 2px 1px rgba(0,0,0,0.2)',
        }}
        >
          {this.props.children}
        </div>        
      </div>
    );
  }
}