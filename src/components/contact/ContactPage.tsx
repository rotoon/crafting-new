"use client";
import { useState, useCallback } from "react";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#00FF00" />
      <path
        d="M27.2 16.8h2.4V13h-3.2c-3.1 0-5.2 2.1-5.2 5.2v2.4H19v4h2.2V35h4v-10.4h3.2l.6-4H25.2v-1.6c0-1.3.6-2.2 2-2.2z"
        fill="#1e1e1e"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#00FF00" />
      <rect x="14" y="14" width="20" height="20" rx="6" stroke="#1e1e1e" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="4.5" stroke="#1e1e1e" strokeWidth="2.5" fill="none" />
      <circle cx="30.5" cy="17.5" r="1.5" fill="#1e1e1e" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#00FF00" />
      <path
        d="M31.5 19.2c-1.8 0-3.3-1.5-3.3-3.3h-3v11.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1v-3.1c-.3 0-.5-.1-.8-.1-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5V22c1 .7 2.1 1.1 3.3 1.2v-4z"
        fill="#1e1e1e"
      />
    </svg>
  );
}

const SOCIAL_GROUPS = [
  [
    {
      icon: <FacebookIcon />,
      label: "Crafting Lab",
      href: "https://www.facebook.com/CraftingLab.cnx",
    },
    {
      icon: <InstagramIcon />,
      label: "craftinglab.cnx",
      href: "https://www.instagram.com/craftinglab.cnx/",
    },
  ],
  [
    {
      icon: <FacebookIcon />,
      label: "Craft Heart",
      href: "https://www.facebook.com/CraftHeart.cnx",
    },
    {
      icon: <InstagramIcon />,
      label: "craft_heart25",
      href: "https://www.instagram.com/craft_heart25",
    },
    {
      icon: <TikTokIcon />,
      label: "craftheart2025",
      href: "https://www.tiktok.com/@craftheart2025",
    },
  ],
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.consent) return;
      setSubmitted(true);
    },
    [form.consent]
  );

  return (
    <div className="cp-page">
      {/* Glow effects */}
      <div className="cp-glow cp-glow-1" />
      <div className="cp-glow cp-glow-2" />

      {/* ── HERO ── */}
      <section className="cp-hero">
        <h1 className="cp-title">CONTACT</h1>
        <p className="cp-desc">
          We develop and design platforms covering all business groups. Using technology that focuses
          on updating to use in the future and expand the scope of use (scaling up) flexibly
        </p>
      </section>

      {/* ── INFO SECTION ── */}
      <section className="cp-info-section">
        <div className="cp-info-left">
          <div className="cp-info-block">
            <p className="cp-info-label">Business Hours</p>
            <p className="cp-info-value">Monday - Friday 09.30 - 18.00</p>
          </div>
          <div className="cp-info-block">
            <p className="cp-info-value">08 4169 6906</p>
          </div>
          <div className="cp-info-block">
            <p className="cp-info-value">craftinglab.co@gmail.com</p>
          </div>
          <div className="cp-info-block">
            <p className="cp-info-value cp-info-bold">CRAFTINGLAB Co.,Ltd.</p>
            <p className="cp-info-value">
              210 Moo 2, Ton Pao Sub-district,
              <br />
              San Kamphaeng District,
              <br />
              Chiang Mai 50130 Thailand
            </p>
          </div>
        </div>

        <div className="cp-info-right">
          <iframe
            title="CRAFTINGLAB location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900!2d98.9656942!3d18.7996069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2fc05c7df8dd:0x307f0f1c4af5ed93!2sCRAFTINGLAB+Co.,+Ltd.!5e0!3m2!1sen!2sth!4v1"
            className="cp-map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="cp-contact-section">
        <div className="cp-contact-left">
          <h2 className="cp-title">GET IN TOUCH</h2>
          <p className="cp-contact-desc">
            Contact us with your questions about development and partnerships. Inquire about
            upcoming events. Leave us your feedback.
          </p>

          <div className="cp-socials">
            {SOCIAL_GROUPS.map((group, gi) => (
              <div key={gi} className="cp-social-group">
                {group.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-social-item"
                  >
                    <span className="cp-social-icon">{s.icon}</span>
                    <span className="cp-social-label">{s.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="cp-contact-right">
          {submitted ? (
            <div className="cp-submitted">
              <p>Thank you! We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form className="cp-form" onSubmit={handleSubmit} noValidate>
              <div className="cp-field">
                <label className="cp-field-label" htmlFor="cp-name">
                  Your Name
                </label>
                <input
                  id="cp-name"
                  className="cp-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="cp-field">
                <label className="cp-field-label" htmlFor="cp-email">
                  Your Email
                </label>
                <input
                  id="cp-email"
                  className="cp-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="cp-field">
                <label className="cp-field-label" htmlFor="cp-phone">
                  Your Phone Number
                </label>
                <input
                  id="cp-phone"
                  className="cp-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="cp-field">
                <label className="cp-field-label" htmlFor="cp-service">
                  Service Interest
                </label>
                <input
                  id="cp-service"
                  className="cp-input"
                  type="text"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                />
              </div>

              <div className="cp-field">
                <label className="cp-field-label" htmlFor="cp-message">
                  Message
                </label>
                <textarea
                  id="cp-message"
                  className="cp-input cp-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <div className="cp-consent-row">
                <label className="cp-checkbox-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="cp-checkbox"
                  />
                  <span className="cp-consent-text">
                    I consent to the processing of my personal data
                    <br />
                    for the purpose of contact.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="cp-submit"
                disabled={!form.consent}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
