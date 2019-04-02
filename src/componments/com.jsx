import React, { Component } from 'react';

class Ele extends Component{
    constructor(props){
       super(props);
       this.state = ({
            childText: "我来自子组件"
       })  
    };
    clickFun(text) {  //定义触发的方法
        this.props.pfn(text)//这个地方把值传递给了props的事件当中
    }
    render(){
        return (
           <div>
               <h1>Hello, {this.props.age}</h1>
               <p>{this.props.fn}</p>
               <ul>
                    {
                        this.props.arr.map(item => { //这个地方通过this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
                            return (
                                <li key={item.userName}>
                                    {item.userName} 评论是:{item.text}
                                </li>
                            )
                        })
                    }
               </ul>
                {/* 通过事件进行传值，如果想得到event，可以在参数最后加一个event，
                这个地方还是要强调，this，this，this */}
                <button onClick={this.clickFun.bind(this, this.state.childText)}>传值</button>
           </div>
        );
    };
}

export default Ele;