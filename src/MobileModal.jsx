import React, {
  Component
} from 'react';

let isYpoint = 0;

export default class MobileModal extends Component {
  componentDidMount() {
    isYpoint = window.scrollY;
    const isHeight = window.innerHeight;
    const isWidth = window.innerWidth;
    window.scrollTo(0, 1);
    document.body.style.height = `${isHeight + 70}px`;
    document.body.style.overflow = `hidden`;
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.prevaentSroll);
    window.removeEventListener('touchmove', this.prevaentSroll );
    document.body.removeAttribute("style");
    window.scrollTo(0, isYpoint);
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: window.innerHeight,
          zIndex: 5500,
          left: 0,
          top: 0,
          backgroundColor: this.props.bgColor,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}