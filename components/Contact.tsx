"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL, CONTACT_LINKS } from "@/lib/constants";
import { staggerContainer, staggerItem, fadeLeft, fadeRight } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { delay } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  Mail: <Mail size={18} />,
  Linkedin: <Linkedin size={18} />,
  Github: <Github size={18} />,
  FileText: <FileText size={18} />,
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function FormInput({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-semibold"
        style={{ color: "var(--color-text-muted)" }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: "var(--color-purple-light)" }}>
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="form-input"
        autoComplete={type === "email" ? "email" : undefined}
      />
    </div>
  );
}

export default function Contact() {
  const [ref, visible] = useIntersectionObserver({ threshold: 0.1 });
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (field: keyof FormState) => (val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);

    try {
      // Simulate API call — wire up EmailJS / Resend / Formspree here
      await delay(1600);

      setSent(true);
      setForm(INITIAL_FORM);
      toast.success("Message sent! Harmanpreet will get back to you soon. 🚀");

      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact" hasBg>
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="mb-14">
          <div className="section-label">
            <MessageSquare size={13} />
            Get In Touch
          </div>
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading">
            Open to internships, collaborations, and exciting project ideas.
            Don&apos;t hesitate to reach out — let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — info */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-6">
            <div>
              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: "var(--color-text)" }}
              >
                Let&apos;s build something amazing.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Whether you have a project idea, an internship opportunity, a
                collaboration proposal, or simply want to connect — my inbox is
                always open. I respond within 24 hours.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  download={link.href.endsWith(".pdf") ? true : undefined}
                  className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
                  style={{
                    background: link.bg,
                    border: `1px solid ${link.border}`,
                  }}
                  whileHover={{
                    x: 8,
                    transition: { duration: 0.22 },
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 30px ${link.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${link.color}20`, color: link.color }}
                    aria-hidden="true"
                  >
                    {ICON_MAP[link.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-xs mt-0.5 truncate"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="flex-shrink-0 transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--color-text-faint)" }}
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </div>

            {/* Availability note */}
            <div
              className="portfolio-card p-4 flex items-center gap-3"
            >
              <div className="glow-dot flex-shrink-0" aria-hidden="true" />
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Currently{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  available for internships
                </span>{" "}
                and freelance projects. Response time: ~24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeRight}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="portfolio-card p-6 sm:p-7 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Your Name"
                  id="contact-name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Priya Sharma"
                  required
                />
                <FormInput
                  label="Email Address"
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="priya@company.com"
                  required
                />
              </div>

              <FormInput
                label="Subject"
                id="contact-subject"
                value={form.subject}
                onChange={set("subject")}
                placeholder="Frontend Internship Opportunity"
              />

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Message
                  <span
                    className="ml-1"
                    style={{ color: "var(--color-purple-light)" }}
                  >
                    *
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  placeholder="Tell me about the opportunity or project you have in mind..."
                  rows={5}
                  required
                  className="form-input resize-none"
                  style={{ minHeight: "120px" }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending || sent}
                className="btn-primary w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={!sending && !sent ? { scale: 1.02, y: -1 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p
                className="text-center text-[11px]"
                style={{ color: "var(--color-text-faint)" }}
              >
                Your data is never shared or stored anywhere.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
