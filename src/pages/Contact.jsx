import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend / email API (e.g. fetch("/api/contact", {method:"POST", body: JSON.stringify(form)}))
    console.log("Contact form:", form);
    setSent(true);
  };

  return (
    <section className="section">
      <div className="container narrow">
        <h1 className="h1 center">Schedule A Demo</h1>
        <p className="lead center">Your demo takes 30 minutes. No commitment. No sales pressure.</p>

        {sent ? (
          <div className="notice">Thank you! We will get back to you shortly.</div>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <input name="name" placeholder="Name" required value={form.name} onChange={onChange} />
            <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
            <input name="company" placeholder="Company" value={form.company} onChange={onChange} />
            <textarea name="message" rows="5" placeholder="How can we help?" value={form.message} onChange={onChange} />
            <button className="btn btn-primary" type="submit">Book a Demo</button>
          </form>
        )}
      </div>
    </section>
  );
}
