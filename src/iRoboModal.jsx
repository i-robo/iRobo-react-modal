import React, {
  Component
} from 'react';
import DeskTopModal from './DeskTopModal';
import MobileModal from './MobileModal';

export default class iRoboModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAgent: 'DeskTop',
      isOpen: props.isOpen,
    };
    this.isClose = this.isClose.bind(this);
    this.userAgentDetect = this.userAgentDetect.bind(this);
  }

  componentDidMount() {
    this.userAgentDetect();
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.isOpen !== this.props.isOpen) {
      this.isClose(); 
    }  
  }

  isClose(e) {  
    this.setState({
      isOpen: !this.state.isOpen,
    });    
  }

  userAgentDetect() {
    const userAgent = navigator.userAgent.indexOf('Mobile') != -1 ? 'Mobile' : 'DeskTop';
    this.setState({
      userAgent: userAgent,
    });
  }

  wheelpreventDefault(e) {
    e.preventDefault();
  }

  render() {
    let modal = this.state.userAgent === 'DeskTop' ? (
      <DeskTopModal 
        isWidth={this.props.isWidth}
        isHeight={this.props.isHeight}
        bgColor={this.props.bgColor}
        isClose={() => this.isClose()}
      >
        {this.props.children}
      </DeskTopModal>
      ) : (
      <MobileModal 
        isWidth={this.props.isWidth}
        isHeight={this.props.isHeight}
        bgColor={this.props.bgColor}
      >
        {this.props.children}
      </MobileModal>
      )
    return (
      <div>
        {
          this.state.isOpen ? modal : null
        }
      </div>
    );
  }
}