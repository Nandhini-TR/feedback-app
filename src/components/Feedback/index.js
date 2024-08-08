import {Component} from 'react'
import EmojiItem from '../emojiItem'
import './index.css'

class Feedback extends Component {
  state = {isHappy: false}

  onHappy = () => {
    this.setState({isHappy: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isHappy} = this.state
    return (
      <div className="bg-container">
        {isHappy ? (
          <div className="card-container-emoji">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thanks">Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card-container">
            <h1 className="feedback-question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <EmojiItem key={each.id} emojis={each} onHappy={this.onHappy} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
