/* ==========================================================
   Link Bio — Géssyca Araújo | Nutricionista
   Edite os links abaixo. Todos os botões da página usam esta lista.
   (WhatsApp e Instagram copiados do perfil @nutricionista.gessycaraujo)
   ========================================================== */

const WHATS = "5573981947411";
const MSG = (texto) => encodeURIComponent(`Olá, Géssyca! Vim pelo Instagram e ${texto}`);
const wa = (texto) => `https://wa.me/${WHATS}?text=${MSG(texto)}`;

const LINKS = {
  // Agendamento por WhatsApp (mensagem já preenchida)
  whatsOnline:     wa("gostaria de agendar uma consulta ONLINE."),
  whatsPresencial: wa("gostaria de agendar uma consulta PRESENCIAL."),
  whatsDuvidas:    wa("tenho uma dúvida sobre a consulta."),
  whatsMounjaro:   wa("uso (ou usei) Mounjaro e quero acompanhamento nutricional."),
  whatsapp:        wa("gostaria de mais informações."),
  // Conteúdo no Instagram (trocar pelos links dos destaques "Pacientes" e "Meu método", se quiser)
  resultados: "https://www.instagram.com/nutricionista.gessycaraujo/",
  metodo:     "https://www.instagram.com/nutricionista.gessycaraujo/",
  // Redes
  instagram: "https://www.instagram.com/nutricionista.gessycaraujo/",
  reels:     "https://www.instagram.com/nutricionista.gessycaraujo/reels/"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (url) el.href = url;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Animação de entrada
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el, i) => { el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`; io.observe(el); });
} else {
  items.forEach((el) => el.classList.add("is-visible"));
}
