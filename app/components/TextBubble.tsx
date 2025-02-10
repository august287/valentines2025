interface TextBubbleProps {
    message: string
  }
  
  export default function TextBubble({ message }: TextBubbleProps) {
    return (
      <div className="relative">
        <div className="relative bg-white rounded-2xl px-4 py-2 shadow-lg">
          <p className="text-xl font-bold text-pink-600">{message}</p>
          <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
        </div>
      </div>
    )
  }
  
  