import { useState } from "react";
import { X } from "lucide-react";

export default function AlertBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white py-2 px-4 text-center text-sm font-medium" role="alert">
      <div className="container flex items-center justify-between">
        <span>🎸 Current turnaround time: 7-10 business days for standard repairs</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 ml-4 p-1 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent"
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
