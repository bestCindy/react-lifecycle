import React from 'react';
import Test from "./Test";
import Demo from "./Demo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderTest: true
    }
  }
  render() {
    return (
      <div>
        {/* {this.state.isRenderTest ? <Test></Test> : "不渲染Test"} */}
        {this.state.isRenderTest ? <Demo></Demo> : "不渲染Demo"}

        <p>App</p>

        <button type="button" onClick={() => this.setState({})}>App SetState更新</button>
      
        <button type="button" onClick={
          () => {
            this.setState({
              isRenderTest: !this.state.isRenderTest
            })
          }
        }>切换Demo渲染</button>
      </div>
    )
  }
}

export default App;
