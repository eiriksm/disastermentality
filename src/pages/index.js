import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      answer: ''
    }
  }

  render() {
    var items = [
      'Why are there too few cat videos on the internet?',
      'Why is it raining?',
      'Why is everything so expensive?',
      'Why is the lunch not fiskekake?'
    ].map((item) => {
      return (<li onClick={this.handleItemClick.bind(this, item)}>{item}</li>)
    })
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <input id="question-input" type="text" placeholder="What is your question?" />
        <button onClick={this.handleClick.bind(this)}>Tell me</button>
        <h3>Question suggestions (click):</h3>
        <ul>
          {items}
        </ul>
        <h3>Answer</h3>
        <p>{this.state.answer}</p>
      </Layout>
    )  
  }

  handleItemClick(item) {
    document.getElementById('question-input').value = item;
  }

  handleClick() {
    this.setState({
      answer: Date.now() % 4 === 0 ? 'Who knows' : 'NPM'
    })
    setTimeout(() => {
      this.setState({
        answer: ''
      })
    }, 2000)
  }
}

export default IndexPage
