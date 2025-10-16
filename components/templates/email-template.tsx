import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#1e40af",
          color: "white",
          padding: "30px 20px",
          borderRadius: "8px 8px 0 0",
          textAlign: "center" as const,
        }}
      >
        <h1
          style={{
            margin: "0",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Ventifresh FR
        </h1>
        <p
          style={{
            margin: "10px 0 0 0",
            fontSize: "16px",
            opacity: 0.9,
          }}
        >
          Nuevo mensaje de contacto
        </p>
      </div>

      {/* Contact Info */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "25px",
          borderLeft: "4px solid #1e40af",
        }}
      >
        <h2
          style={{
            margin: "0 0 15px 0",
            color: "#374151",
            fontSize: "18px",
          }}
        >
          Información del contacto:
        </h2>
        <div style={{ marginBottom: "10px" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#1e40af",
              display: "inline-block",
              width: "80px",
            }}
          >
            Nombre:
          </span>
          <span style={{ color: "#374151" }}>{name}</span>
        </div>
        <div>
          <span
            style={{
              fontWeight: "bold",
              color: "#1e40af",
              display: "inline-block",
              width: "80px",
            }}
          >
            Email:
          </span>
          <span style={{ color: "#374151" }}>{email}</span>
        </div>
      </div>

      {/* Message */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          border: "1px solid #e5e7eb",
          borderTop: "none",
        }}
      >
        <h2
          style={{
            margin: "0 0 15px 0",
            color: "#374151",
            fontSize: "18px",
          }}
        >
          Mensaje:
        </h2>
        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "20px",
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
            lineHeight: "1.6",
            color: "#4b5563",
            fontSize: "15px",
          }}
        >
          {message}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#dbeafe",
          padding: "20px",
          borderRadius: "0 0 8px 8px",
          textAlign: "center" as const,
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#1e40af",
            fontWeight: "500",
          }}
        >
          Este mensaje fue enviado desde el formulario de contacto de Ventifresh
          FR
        </p>
        <p
          style={{
            margin: "10px 0 0 0",
            fontSize: "12px",
            color: "#6b7280",
          }}
        >
          Soluciones integrales en climatización y ventilación profesional
        </p>
      </div>
    </div>
  );
}
