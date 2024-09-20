import ChatComp from "@/components/chat";

interface PageProps {
    params: {
        chatroomId: string;
        userId: string;
    };
}



export default function Page({ params }: PageProps) {
    return (
        <div className="container max-w-screen-sm mt-20">
            <ChatComp />
        </div>
    );
}
