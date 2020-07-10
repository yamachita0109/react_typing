import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Question extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.timer}
        </div>
        <div>
          {/* {this.state.text} */}
        </div>
      </div>
    )
  }
}

class Anser extends React.Component {
  
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 3,
      text: '祇園生者の鐘の音'
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const i = this.state.timer - 1
      if (i === 0) {
        clearInterval(this.interval)
        return
      }
      this.setState({timer: i})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <div>
          {this.state.timer}
        </div>
        <div>
          {this.state.text}
        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: false
    }
  }
  click() {
    this.setState({
      start: !this.state.start
    })
  }
  render() {
    const status = this.state.start
    const startButton = (<button onClick={() => this.click()}>Ready...</button>)
    const content = (<Game />)
  
    return (
      <div className='main'>
        {status ? content : startButton}
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))