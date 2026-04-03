import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import mangaloreMap from "../assets/map.jpeg";

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
      <div className="w-full overflow-hidden rounded-[3rem] border border-slate-200/80 bg-white/80 shadow-2xl transition-all duration-500 hover:shadow-sky-500/10 dark:border-slate-800/80 dark:bg-slate-900/70">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="relative bg-slate-50/50 p-8 dark:bg-slate-800/30 lg:p-16">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/5" />
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white lg:text-5xl">
                  Get in <span className="text-sky-500">Touch</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Ready to transform your ideas into scalable reality? Reach out and let's build something exceptional.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-all group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-500/30 dark:bg-slate-900">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Email Me</h3>
                    <p className="text-lg font-bold text-slate-950 dark:text-white">jayaprakashshettigar686@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-all group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-500/30 dark:bg-slate-900">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Call Me</h3>
                    <p className="text-lg font-bold text-slate-950 dark:text-white">+91 7338198918</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-all group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-sky-500/30 dark:bg-slate-900">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Location</h3>
                    <p className="text-lg font-bold text-slate-950 dark:text-white">Mangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Stylized Map View */}
              <div className="h-56 w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-800/80 group">
                <div className="relative h-full w-full">
                  <img
                    src={mangaloreMap}
                    alt="Map of Mangalore"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-xl backdrop-blur-md dark:bg-slate-900/90 dark:text-slate-200">
                    Mangalore, KA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-16">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="rounded-full bg-green-500/10 p-6 mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 dark:text-white">Message Sent!</h3>
                  <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-xs">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-10 rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-sky-500 dark:bg-white dark:text-slate-950"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:ring-sky-500/5"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:ring-sky-500/5"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Subject</label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:ring-sky-500/5"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:ring-sky-500/5 resize-none"
                      placeholder="Tell me more about your requirements..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 text-sm font-bold text-red-500 bg-red-50 dark:bg-red-500/10 p-4 rounded-2xl">
                      <AlertCircle className="h-5 w-5" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-950 px-8 py-5 font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-sky-500 hover:shadow-sky-500/30 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
                  >
                    {status === "loading" ? (
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
