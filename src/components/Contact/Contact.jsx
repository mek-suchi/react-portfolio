import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  // handler สำหรับเปลี่ยนค่า input
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // handler สำหรับ submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // สร้าง FormData ตามที่ Formspree รองรับ
      const payload = new FormData();
      payload.append("firstName", formData.firstName);
      payload.append("lastName", formData.lastName);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      const res = await fetch("https://formspree.io/f/meoggvdd", {
        method: "POST",
        body: payload,
        headers: {
          // บอกว่าเรารับ response เป็น JSON
          "Accept": "application/json"
        }
      });

      const json = await res.json();
      if (res.ok) {
        alert("📬 ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อมาครับ!");
        // เคลียร์ฟอร์ม
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        // Formspree จะคืน errors มาเป็น array ของ message
        const errors = json.errors?.map(err => err.message).join("\n") || json.error;
        alert("❌ เกิดข้อผิดพลาด:\n" + errors);
      }
    } catch (err) {
      alert("⚠️ ไม่สามารถส่งได้: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        {/* info */}
        <div className={styles.contact_info}>
          <h3>{t("contact.heading")}</h3>
          <p className={styles.contact_desc}>{t("contact.desc")}</p>

          <p className={styles.contact_address}>
            <FaMapMarkerAlt /> {t("contact.address")}
          </p>
          <p><FaPhone /> (+66) 61-641-4625</p>
          <p><FaEnvelope /> suchichart.chuttale@gmail.com</p>
        </div>

        {/* form */}
        <div className={styles.contact_form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_group}>
              <div>
                <label htmlFor="firstName">{t("contact.form.first")}</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder={t("contact.form.first_ph")}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">{t("contact.form.last")}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder={t("contact.form.last_ph")}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <label htmlFor="email">{t("contact.form.email")}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t("contact.form.email_ph")}
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder={t("contact.form.message_ph")}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={submitting}>
              {submitting ? "กำลังส่ง..." : t("contact.form.send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
