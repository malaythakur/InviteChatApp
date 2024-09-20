interface PageProps {
    params: {
        chatroomId: string;
    };
}



export default function ChatRoom({params}: PageProps) {
  return (
    <div>You&apos;re about to enter the chatroom {params.chatroomId}</div>
  )
}
