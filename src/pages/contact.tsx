import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Globe, Phone, Send } from "lucide-react";
import ContactIcon from "@/components/common/contact-icon";
import { Link } from "@tanstack/react-router";

const contact: React.FC = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Let's Get in Touch: Ways to Connect with Me</h1>

      <p className="text-pretty text-base text-gray-600">
        Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If
        you have a specific question or comment, please feel free to email me directly at{" "}
        <a href="mailto:abdennour.tadjer@gmail.com" className="text-blue-600">
          abdennour.tadjer@gmail.com
        </a>
        . I make an effort to respond to all messages within 24 hours, although it may take me longer during busy
        periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required
        fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can
        find me on https://instagram.com/. I post regular updates and engage with my followers there, so don't hesitate
        to reach out. Thanks again for your interest, and I look forward to hearing from you!
      </p>

      <div className="flex items-start justify-around flex-wrap gap-10">
        <ContactIcon
          icon={<Phone className="h-10 w-10 text-indigo-700" />}
          label="CONTACT NUMBER"
          value={<a href="tel://+213780115527">+213 780 11 55 27</a>}
        />

        <ContactIcon
          icon={<Send className="h-10 w-10 text-indigo-700" />}
          label="EMAIL ADDRESS"
          value={<a href="mailto:abdennour.tadjer@gmail.com">abdennour.tadjer@gmail.com</a>}
        />

        <ContactIcon
          icon={<Globe className="h-10 w-10 text-indigo-700" />}
          label="WEBSITE"
          value={<Link to="/">click here</Link>}
        />
      </div>

      <div className="mx-auto max-w-xl p-4 border rounded">
        <form className="space-y-6" onSubmit={submitHandler} autoComplete="on">
          <div>
            <Input name="name" value={data.name} onChange={changeHandler} placeholder="Your Name" />
          </div>
          <div>
            <Input name="email" value={data.email} onChange={changeHandler} placeholder="Your Email" />
          </div>
          <div>
            <Input name="subject" value={data.subject} onChange={changeHandler} placeholder="Subject" />
          </div>
          <div>
            <Textarea name="message" value={data.message} onChange={changeHandler} placeholder="Message" />
          </div>
          <div>
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default contact;
