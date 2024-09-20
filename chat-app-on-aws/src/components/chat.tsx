"use client"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

export default function ChatComp() {
    return (
        <div style={{ position: "relative", height: "500px" }}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        <Message model={{
                            direction: "incoming",
                            position: "first",
                            message: "Hello my friend",
                            sentTime: "just now",
                            sender: "Joe"
                        }} />

                        <Message model={{
                            direction: "incoming",
                            position: "last",
                            message: "Hello my friend 2",
                            sentTime: "just now",
                            sender: "Joe"
                        }} />

                        <Message model={{
                            direction: "outgoing",
                            position: "single",
                            message: "Hi there",
                            sentTime: "just now",
                            sender: "Joe"
                        }} />
                    </MessageList>
                    <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

