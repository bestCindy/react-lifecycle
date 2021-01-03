import React, { Component } from 'react';
export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRender: true
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // 函数返回结果将会被 添加/更新 到 state 里面去
        // null state 不需要任何改变
        console.log("静态生命周期函数");
        // return null;
        return {
            like: true
        }
    }
    getSnapshotBeforeUpdate() {
        console.log("更新前获取快照");
        return "from update";
    }
    render() {
        console.log("render", this.state);
        return(
            <div>
                <p>Demo</p>
                <button type="button"
                    onClick={()=>this.setState({})}
                >setState</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(prevProps, prevState, info) {
        console.log("componentDidUpdate");
        console.log(info);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}