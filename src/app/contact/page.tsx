import { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Ryan Singh Sareen",
  description:
    "Get in touch with Ryan Singh Sareen. Reach out via email or connect on GitHub to discuss projects and opportunities.",
};

export default function ContactPage() {
  return <Contact />;
}
