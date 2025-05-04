import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0b0b5c] text-white py-5 px-6 sm:px-10 text-left">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold border-b border-white/40 inline-block pb-1">Contact us</h2>
        <div className="text-base leading-relaxed">
          <p className="font-semibold">AJ Institute of Engineering & Technology,</p>
          <p>NH-66, Kottara Chowki,</p>
          <p>Mangaluru – 575006, Karnataka, India</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> <span>+91 9483026503</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> <span>+91 0824 2862200</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> <span>+91 0824 2455048</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> <span>admissions@ajiet.edu.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
