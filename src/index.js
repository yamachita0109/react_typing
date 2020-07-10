import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const l = [
  'ぐるなびは常に勉強して進化します。',
  'ぐるなびは皆様方の力を借りて進化します。',
  'ぐるなびは皆様方の知恵を借りて進化します。',
  'ぐるなびは21世紀の食生活を豊かにするために進化し続けます。'
]
const text = l[Math.floor(Math.random() * l.length)]

class Question extends React.Component {
  constructor(props) {
    super(props)
  }

  render() { 
    return (
      <div>
        <div>
          {this.props.timer}
        </div>
        <div>
          {text}
        </div>
      </div>
    )
  }
}

class Anser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: ''
    }
  }

  clickAnser(v) {
    this.setState({ result: (v === text) ? "正解" : "不正解" })
  }

  render() {
    return (
      <div>
        <div>
          Come on! Enter!
      </div>
        <div>
          <input
            type="text"
            ref={input => { this.input = input }} />
        </div>
        <div>
          <button type="button" onClick={() => this.clickAnser(this.input.value)}>FinalAnser?</button>
        </div>
        <div>
          {this.state.result}
        </div>
      </div>
    )
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 3,
      isAnser: false
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const i = this.state.timer - 1
      if (i === 0) {
        clearInterval(this.interval)
        this.setState({ isAnser: true })
        return
      }
      this.setState({timer: i})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const dom = this.state.isAnser ? <Anser /> : <Question timer={this.state.timer} />
    return (
      <div>
        {dom}
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

  clickStart() {
    this.setState({
      start: !this.state.start
    })
  }

  render() {
    const status = this.state.start
    const startButton = (
      <div className="btn-area">
        <button onClick={() => this.clickStart()}>Ready...</button>
      </div>
    )
    const content = (<Content />)
  
    return (
      <div className='main'>
        {status ? content : startButton}
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))