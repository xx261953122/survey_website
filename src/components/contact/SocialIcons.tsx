import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const ICONS = [
  { component: FaLinkedin, label: 'LinkedIn', href: '#' },
  { component: FaTwitter, label: 'Twitter', href: '#' },
  { component: FaInstagram, label: 'Instagram', href: '#' },
  { component: FaFacebook, label: 'Facebook', href: '#' },
];

export const SocialIcons: React.FC = () => (
  <div className="flex justify-end space-x-6 text-2xl">
    {ICONS.map(({ component: Icon, label, href }) => (
      <a key={label} href={href} aria-label={label} className="hover:opacity-80">
        <Icon className="cursor-pointer" />
      </a>
    ))}
  </div>
);
