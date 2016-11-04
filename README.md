#iRobo react-modal

아이로보의 간단한 모달 컴퍼넌트 입니다.
Simple modal component for React.JS

### 설치 Installation

```
npm install -S iRobo-react-modal
```

### 사용방법 Usage

```
<IRoboModal
  isOpen={boolean}
  isWidth={widthValue}
  isHeight={heightValue}
  bgColor={colorValue}
>
{content}
</IRoboModal>
```

#### Props

 - isOpen: (boolean) 모달의 오픈여부
 - isWidth: (Number) 모달 넓이
 - isHeight: (Number) 모달 높이
 - bgColor: (HEXcode) 모달 전체 배경 색

### 예시 Example

```
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
```

#### Examples

git clone

```
$ npm install
$ npm run example
```

확인하기 http://localhost:8080/

### License

MIT