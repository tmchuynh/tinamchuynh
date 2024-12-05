import Breadcrumb from '@/components/ui/breadcrumb';
import { FC } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact",
  },
];

const ContactSection: FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mx-auto p-6 rounded-lg shadow-md border dark:shadow-border">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>

        <div className="space-y-6">
          <ContactCard
            icon={<FaPhoneAlt />}
            title="Phone"
            content="+1 (234) 567-890"
            href="tel:+1234567890"
          />
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            content="contact@example.com"
            href="mailto:contact@example.com"
          />
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            content="1234 Orange St, Orange, CA"
            href="https://www.google.com/maps?q=1234+Orange+St,+Orange,+CA"
            isExternal
          />
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: JSX.Element;
  title: string;
  content: string;
  href: string;
  isExternal?: boolean;
}

const ContactCard: FC<ContactCardProps> = ( { icon, title, content, href, isExternal } ) => {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="flex items-center p-4 border rounded-lg transition-transform duration-300 transform hover:scale-105 w-11/12 mx-auto"
      aria-label={title}
    >
      <div className="text-4xl text-primary mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-accent">{title}</h3>
        <p className="underline underline-offset-4 hover:no-underline">{content}</p>
      </div>
    </a>
  );
};

export default ContactSection;
