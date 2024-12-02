const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact</h1>

      <p className="text-lg mb-4">
        If you have any questions or would like to get in touch, feel free to reach out through the following methods:
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Email:</span>
          <a href="mailto:youremail@example.com" className="text-teal-500">tinamchuynh@gmail.com</a>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>
          <a href="tel:+1234567890" className="text-teal-500">+1 714 858 2418</a>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold">Social Media:</span>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/tinamchuynh/" className="text-teal-500" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/tmchuynh" className="text-teal-500" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
