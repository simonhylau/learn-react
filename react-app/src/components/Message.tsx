interface MessageProps {
  message: string;
}

function Message({ message }: MessageProps) {
  return <h1>{message}</h1>;
}

export default Message;
