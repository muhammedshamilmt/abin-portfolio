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
    <div className="w-full bg-foreground text-background py-2 px-6">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-mono uppercase tracking-widest">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-6 mb-2 md:mb-0">
          <Link href="tel:+919876543210" className="flex items-center hover:text-accent-orange transition-colors">
            <Phone className="w-3 h-3 mr-2" />
            +91 98765 43210
          </Link>
          <Link href="mailto:hello@financialconsultant.com" className="flex items-center hover:text-accent-orange transition-colors">
            <Mail className="w-3 h-3 mr-2" />
            hello@financialconsultant.com
          </Link>
          <span className="hidden lg:flex items-center text-muted-foreground">
            <MapPin className="w-3 h-3 mr-2" />
            New Delhi, India
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4">
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
