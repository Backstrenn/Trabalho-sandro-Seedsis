import React, { useState } from "react";

const ContactForm = () => {
  const [toMail, setToMail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!toMail || !content) {
      setMessage({ type: "error", text: "Preencha todos os campos." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {

      const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwNDE4ODA2MDMyMzk5NTE2MTQ0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJoZ21tYXJxdWVzQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Imc5WkNuQm5fOGVNMmYzYXhsRU9KOUEiLCJuYmYiOjE3MzIxNjUxNzMsImlhdCI6MTczMjE2NTQ3MywiZXhwIjoxNzMyMTY5MDczLCJqdGkiOiIwOTk1ZjExNTU4MGVmZjU0M2IwZDdkZWFmZjFhMDI4Mjc5Y2MxMjdlIn0.ReW-YK6cLGUN-5Hg5cDQarbOCXX4LRUbwzrJO9-0wAK9qdcxwn9sKhkHn56CC_JCelOSVzSg6y5ojqlSCdY0P8tbJQYJrgxULg0EsB4c_HDCvjk43Xk8NC0m1AKAa9FxZPU6SRaCdVx4GZnvtYANzZOrgSnNqzeQLN0awiefit0K29c7QLIT-1bi_iXV80j9gSP-N4b46iBTqnsNe9zPOS6f-OOpswkjzv-2pOpaERsdnrloIML0hA61jIyHSBvERMSdzCDah7_ksLmd5yeodzf4wYJgrlDDzIUOmDQvOa_tU0HE-8ku9ijeIOc0kGHmsFQeiugCuQpfME8rqw2ZKA";

      const response = await fetch(
        "/api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ toMail, content }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "E-mail enviado com sucesso!" });
        setToMail("");
        setContent("");
      } else {
        setMessage({ type: "error", text: data.error || "Erro ao enviar o e-mail." });
      }
    } catch (error) {
      console.error("Erro:", error);
      setMessage({ type: "error", text: "Erro ao conectar-se ao servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Contato</h2>
      {message && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: `1px solid ${message.type === "success" ? "green" : "red"}`,
            backgroundColor: message.type === "success" ? "#d4edda" : "#f8d7da",
            color: message.type === "success" ? "#155724" : "#721c24",
          }}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="toMail" style={{ display: "block", marginBottom: "5px" }}>
            E-mail do destinatário:
          </label>
          <input
            type="email"
            id="toMail"
            name="toMail"
            value={toMail}
            onChange={(e) => setToMail(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="content" style={{ display: "block", marginBottom: "5px" }}>
            Mensagem:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px", minHeight: "100px" }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
