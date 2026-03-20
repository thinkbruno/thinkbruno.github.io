document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("whatsapp-form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim() || "";
        const phone = document.getElementById("phone")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const subject = document.getElementById("subject")?.value.trim() || "";
        const message = document.getElementById("message")?.value.trim() || "";

        const whatsappNumber = "5513988542002";

        const text =
            `Olá Bruno!\n\n` +
            `Nome: ${name}\n` +
            `Telefone: ${phone}\n` +
            `Email: ${email}\n` +
            `Assunto: ${subject}\n` +
            `Mensagem: ${message}`;

        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        window.open(url, "_blank");
    });
});