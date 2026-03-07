import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center shadow-lg overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-white"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-heading font-extrabold text-xl text-accent-foreground leading-none">O</span>
                  <div className="flex gap-0.5 mt-0.5">
                    <div className="w-1 h-0.5 bg-accent-foreground/60"></div>
                    <div className="w-1 h-0.5 bg-accent-foreground/60"></div>
                    <div className="w-1 h-0.5 bg-accent-foreground/60"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none">Orvanta</span>
                <span className="font-heading font-semibold text-sm text-accent leading-none mt-1">Advisory</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-[15px] leading-relaxed mb-6">
              Your trusted partner for study, work, and tourist visa applications worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110">
                <FaFacebookF className="text-primary-foreground text-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110">
                <FaInstagram className="text-primary-foreground text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110">
                <FaLinkedinIn className="text-primary-foreground text-lg" />
              </a>
              <a href="https://wa.me/1605013006" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110">
                <FaWhatsapp className="text-primary-foreground text-lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110">
                <FaTwitter className="text-primary-foreground text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-[15px] text-primary-foreground/80">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Countries", to: "/countries" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-5 text-lg">Services</h4>
            <ul className="space-y-3 text-[15px] text-primary-foreground/80">
              <li>
                <Link to="/services#study-visa" className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200">
                  Study Visa
                </Link>
              </li>
              <li>
                <Link to="/services#work-visa" className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link to="/services#immigrant-visa" className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200">
                  Immigrant Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-[15px] text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200" />
                <span className="leading-relaxed max-w-[280px] hover:text-accent transition-colors cursor-pointer">
                  Mohali (Punjab) | London (United Kingdom) | Dubai (United Arab Emirates)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200" />
                <a 
                  href="mailto:info@orvantaadvisory.com"
                  className="hover:text-accent transition-colors"
                >
                  info@orvantaadvisory.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200" />
                <a 
                  href="tel:+1605013006"
                  className="hover:text-accent transition-colors"
                >
                  1605013006
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 lg:mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[15px] text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Orvanta Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
