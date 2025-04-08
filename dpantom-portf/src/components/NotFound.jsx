// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{t("notFound.title")}</h1> {/* Translated title */}
      <p>{t("notFound.message")}</p> {/* Translated message */}
      <Link to="/">{t("notFound.returnHome")}</Link>{" "}
      {/* Translated button text */}
    </div>
  );
}

export default NotFound;
