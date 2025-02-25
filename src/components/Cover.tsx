import { BookOpenIcon, BeakerIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Cover() {
  return (
    <div className="w-full h-screen bg-background p-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-6">
          <span className="block text-primary-dark">Kiran Kandel</span>
        </h1>
        <p className="text-xl italic text-gray-700 max-w-2xl mx-auto mb-8">
          &ldquo;Cogito Ergo Sum&rdquo;
        </p>
        <div className="flex justify-center gap-6">
          <BookOpenIcon className="w-8 h-8 text-primary-dark" />
          <BeakerIcon className="w-8 h-8 text-primary-dark" />
          <CodeBracketIcon className="w-8 h-8 text-primary-dark" />
        </div>
      </div>
    </div>
  );
}