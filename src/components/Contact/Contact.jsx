import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

function Contact() {
  const { t } = useTranslation();

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
          <p>
            <FaPhone /> (+66) 61-641-4625
          </p>
          <p>
            <FaEnvelope /> suchichart.chuttale@gmail.com
          </p>
        </div>

        {/* form */}
        <div className={styles.contact_form}>
          <form>
            <div className={styles.input_group}>
              <div>
                <label htmlFor="firstName">{t("contact.form.first")}</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder={t("contact.form.first_ph")}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">{t("contact.form.last")}</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder={t("contact.form.last_ph")}
                  required
                />
              </div>
            </div>

            <label htmlFor="email">{t("contact.form.email")}</label>
            <input
              id="email"
              type="email"
              placeholder={t("contact.form.email_ph")}
              required
            />

            <label htmlFor="message">{t("contact.form.message")}</label>
            <textarea
              id="message"
              rows="8"
              placeholder={t("contact.form.message_ph")}
              required
            />

            <button type="submit">{t("contact.form.send")}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
