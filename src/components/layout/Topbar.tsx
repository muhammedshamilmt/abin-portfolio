import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export function Topbar() {
  return (
    <div className="w-full bg-foreground text-background py-2 px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto flex flex-row justify-between items-center text-[9px] sm:text-[11px] font-mono uppercase tracking-widest">
        {/* Left: Contact Info */}
        <div className="flex flex-row items-center space-x-4 sm:space-x-6 w-full md:w-auto justify-center md:justify-start">
          <Link href="tel:+918089708559" className="flex items-center hover:text-accent-orange transition-colors">
            <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
            +91 80 89 70 85 59
          </Link>
          <Link href="mailto:abinsb2026@gmail.com" className="flex items-center hover:text-accent-orange transition-colors">
            <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
            abinsb2026@gmail.com
          </Link>
          <span className="hidden lg:flex items-center text-muted-foreground">
            <MapPin className="w-3 h-3 mr-2" />
            Trivandrum, Kerala
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="hover:text-accent-orange transition-colors" aria-label="Facebook">
            <FaFacebook className="w-3.5 h-3.5" />
          </Link>
          <Link href="#" className="hover:text-accent-orange transition-colors" aria-label="Instagram">
            <FaInstagram className="w-3.5 h-3.5" />
          </Link>
          <Link href="#" className="hover:text-accent-orange transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-3.5 h-3.5" />
          </Link>
          <Link href="#" className="hover:text-accent-orange transition-colors" aria-label="YouTube">
            <FaYoutube className="w-3.5 h-3.5" />
          </Link>
          <Link href="#" className="hover:text-accent-orange transition-colors" aria-label="WhatsApp">
            <MessageCircle className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
