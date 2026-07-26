import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-border py-6 px-4 md:px-8 mt-auto flex flex-col md:flex-row items-center justify-between gap-4 select-none">
      {/* Copyright */}
      <span className="font-sans text-xs text-gray-medium text-center md:text-left">
        Copyright © 2025 Peterdraw
      </span>

      {/* Links */}
      <div className="flex items-center gap-6 font-sans text-xs text-gray-medium justify-center">
        <a href="#privacy" className="hover:text-dark transition-colors">
          Privacy Policy
        </a>
        <a href="#terms" className="hover:text-dark transition-colors">
          Term and conditions
        </a>
        <a href="#contact" className="hover:text-dark transition-colors">
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 text-gray-medium justify-center">
        {/* Facebook */}
        <a href="#facebook" className="hover:text-dark transition-colors" aria-label="Facebook">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </a>

        {/* X (formerly Twitter) */}
        <a href="#x" className="hover:text-dark transition-colors" aria-label="X">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#instagram" className="hover:text-dark transition-colors" aria-label="Instagram">
          <svg className="w-4 h-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect x={2} y={2} width={20} height={20} rx={5} ry={5}/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
          </svg>
        </a>

        {/* YouTube */}
        <a href="#youtube" className="hover:text-dark transition-colors" aria-label="YouTube">
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.018 0 12 0 12s0 3.982.502 5.837a3.003 3.003 0 002.11 2.11c1.858.553 9.388.553 9.388.553s7.53 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.982 24 12 24 12s0-3.982-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="#linkedin" className="hover:text-dark transition-colors" aria-label="LinkedIn">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
