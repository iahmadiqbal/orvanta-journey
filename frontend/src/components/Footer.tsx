import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-10 lg:py-12 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src="/logo.png"
                alt="Orvanta Advisory Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 text-[15px] leading-relaxed mb-4">
              Your trusted partner for study, work, and tourist visa
              applications worldwide.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FaFacebookF className="text-primary-foreground text-lg" />
              </a>
              <a
                href="https://www.instagram.com/orvanta_advisory?igsh=bTZ2aHFoNGEyZmZ4"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FaInstagram className="text-primary-foreground text-lg" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FaLinkedinIn className="text-primary-foreground text-lg" />
              </a>
              <a
                href="https://wa.me/447411962102"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FaWhatsapp className="text-primary-foreground text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <FaTwitter className="text-primary-foreground text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[15px] text-primary-foreground/80">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Countries", to: "/countries" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-lg">
              Services
            </h4>
            <ul className="space-y-2 text-[15px] text-primary-foreground/80">
              <li>
                <Link
                  to="/services/immigration"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Immigration
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/services/it-services"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/legal"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Legal Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3 text-[15px] text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white" />
                <div className="leading-relaxed flex flex-wrap gap-1">
                  <Link
                    to="/locations/india"
                    className="hover:text-accent transition-colors hover:underline"
                  >
                    India
                  </Link>
                  <span>|</span>
                  <Link
                    to="/locations/uk"
                    className="hover:text-accent transition-colors hover:underline"
                  >
                    UK
                  </Link>
                  <span>|</span>
                  <Link
                    to="/locations/hong-kong"
                    className="hover:text-accent transition-colors hover:underline"
                  >
                    Hongkong
                  </Link>
                  <span>|</span>
                  <Link
                    to="/locations/canada"
                    className="hover:text-accent transition-colors hover:underline"
                  >
                    Canada
                  </Link>
                  <span>|</span>
                  <Link
                    to="/locations/belize"
                    className="hover:text-accent transition-colors hover:underline"
                  >
                    Belize
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  size={18}
                  className="shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200"
                />
                <a
                  href="mailto:info@orvantaadvisory.com"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  info@orvantaadvisory.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  size={18}
                  className="shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200"
                />
                <a
                  href="tel:+918196982305"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  India: +91 81969 82305
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  size={18}
                  className="shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200"
                />
                <a
                  href="tel:+447411962102"
                  className="hover:text-accent transition-colors cursor-pointer"
                >
                  UK: +44 7411 962102
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 lg:mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[15px] text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Orvanta Advisory. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
