import Image from "next/image";

export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">🚀 AI Code Review Assistant</h1>
      <p className="text-lg text-gray-600">
        Get instant, AI-powered feedback on your code.
      </p>
    </div>
  );
}
