import React from 'react';
import axios from 'axios';

export default class QuestionForm extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  questionInput = event => {
    this.setState({ question: event.target.value });
  }

  answerInput = event => {
    this.setState({ answer: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('https://yogski.live/api/quiz', { question: this.state.question,
    answer: this.state.answer})
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert('data submitted successfully');
      })
      .catch(err => {
        console.error(err); 
    })
  }

  render() {
    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Question:
            <input type="text" name="question" onChange={this.questionInput} />
          </label>
          <label>
            Answer:
            <input type="text" name="answer" onChange={this.answerInput} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
