import React, { Component } from 'react';

class Trem extends React.Component {
    constructor(props){
        super(props);
        this.inp = this.inp.bind(this);
        this.sub = this.sub.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            place:"请输入...",
            inputV:'',
            selectV:'coconut'
        }
    };
    inp(e){
        this.setState({
            inputV:e.target.value    
        });
        console.log(e.target.value)
    };
    select(e){
        this.setState({
            selectV:e.target.value    
        });
        console.log(e.target.value)
    };
    sub(){
      console.log(this.state.inputV)
    };    
    render(){
        return (
            <div>
                <textarea type="text" onChange={this.inp} placeholder={this.state.place} value={this.state.inputV}/>
                <br/>
                <select value={this.state.selectV} onChange={this.select}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <br/>
                <button onClick={this.sub}>{this.props.main}</button>
            </div>
        )
    }
}

export default Trem;