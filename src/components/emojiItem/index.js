import './index.css'

const EmojiItem = props => {
  const {emojis, onHappy} = props
  const {name, imageUrl} = emojis

  return (
    <li className="each-emoji-card">
      <img src={imageUrl} alt={name} className="emoji" onClick={onHappy} />
      <p>{name}</p>
    </li>
  )
}

export default EmojiItem
