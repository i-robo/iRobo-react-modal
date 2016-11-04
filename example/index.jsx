import ReactDOM from 'react-dom';
import React, {
  Component,
} from 'react';
import IRoboModal from './../src/iRoboModal.jsx';

class IRoboModalTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    })
  }

  render() {
    return (
      <div>
        <span
          onClick={() => this.toggleModal()}
          className="btn"
        >
          팝업 열기
        </span>
        <IRoboModal
          isOpen={this.state.isModalOpen}
          isWidth={400}
          isHeight={500}
          bgColor={'#fff'}
        >
          <div>팝업 내용은 자유롭게</div>
          <span 
            className="btn"
            onClick={() => this.toggleModal()}
          >
            팝업 닫기
          </span>
      	</IRoboModal>
      </div>
    );
  }
}

ReactDOM.render(
  <IRoboModalTest />,
  document.getElementById('app')
);