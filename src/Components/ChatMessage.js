import userIcon from "../Assests/user.png"

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm p-3">
        <img
          className="h-5"
          src={userIcon}
          alt="user icon"
        />
        <span className="font-bold px-2">{ name }</span>
        <span>{ message }</span>
    </div>
  )
}

export default ChatMessage;