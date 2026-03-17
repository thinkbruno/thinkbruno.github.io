export function sendToWhatsApp(data) {
    const phone = "5513981568095";

    const message = `
  Nome: ${data.name}
  Projeto: ${data.project}
  Descrição: ${data.description}
  Prazo: ${data.deadline}
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}