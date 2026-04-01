import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="flex min-h-screen items-center py-24" data-aos="fade-up">
      <div className="w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-2xl transition-all duration-500 hover:shadow-sky-500/10 dark:border-slate-800/80 dark:bg-slate-900/70 dark:hover:shadow-sky-500/5">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="relative bg-slate-50 p-10 dark:bg-slate-800/50 lg:p-14">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/5" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-400/5" />

            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Contact Me
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  Have a complex problem that needs a scalable solution? Let's talk about your next
                  project.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-900">
                    <Mail className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400">jayaprakashshettigar686@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-900">
                    <Phone className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-400">+91 7338198918</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-900">
                    <MapPin className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Mangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Map Placeholder */}
              <div className="h-48 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/50 dark:border-slate-700/50 dark:bg-slate-800/80">
                <div className="flex h-full items-center justify-center grayscale opacity-60">
                  <span className="text-xs uppercase tracking-widest text-slate-500">Regional map visual placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:p-14">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xs">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-semibold text-sky-500 hover:text-sky-600 border-b border-sky-500/30 pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:text-white dark:focus:ring-sky-500/5"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:text-white dark:focus:ring-sky-500/5"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:text-white dark:focus:ring-sky-500/5"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:text-white dark:focus:ring-sky-500/5 resize-none"
                      placeholder="Tell me more about your requirements..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 p-3 rounded-lg">
                      <AlertCircle className="h-4 w-4" />
                      <span>Oops! Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-sky-600 hover:shadow-sky-500/30 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
