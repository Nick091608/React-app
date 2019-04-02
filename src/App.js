import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Com from './componments/com'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      parentText: "现在是父组件",
      arr: [{
          "userName": "fangMing", "text": "123333", "result": true
      }, {
          "userName": "zhangSan", "text": "345555", "result": false
      }, {
          "userName": "liSi", "text": "567777", "result": true
      }, {
          "userName": "wangWu", "text": "789999", "result": true
      },]
    };
    this.foo = "我来自父组件"
  };
  fn(data) {
    this.setState({
        parentText: data //把父组件中的parentText替换为子组件传递的值
    },() =>{
       console.log(this.state.parentText);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />                    
        </header>
        <Com age="大卫" arr={this.state.arr} fn={this.foo} pfn={this.fn.bind(this)}/> {/*通过绑定事件进行值的运算，这个地方一定要记得.bind(this)，不然会报错，切记切记，因为通过事件传递的时候this的指向已经改变 */}
        <p>text is {this.state.parentText}</p>
      </div>
    );
  }
}

export default App;
