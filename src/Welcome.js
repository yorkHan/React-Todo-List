import React from 'react';
class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:new Date(),
            test: '1'
        }
    console.log('我已经在 constructor 里将 props 和 state 初始化好了')
}
componentWillMount(){
    this.setState({
        data:new Date(),
        test:'componentWillMount'
    })
    console.log('运行到这里的话，说明马上就要运行 render 了')
}
    render() {
        console.log('嗯，这里是 render')
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
                <h2>{this.state.data.toString()}</h2>
                <p>{this.state.test}</p>
            </div>
        )
    }
componentDidMount(){
    this.setState({
        data:new Date(),
        test:'componentDidMount'
    })
    console.log('已经挂载到页面里了')
  }
}
  
export default Welcome