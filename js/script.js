const projects = [
  {
    title: "Kyvora Inventory Control",
    category: "Sistema empresarial · Inventario",
    filter: "web",
    description: "Sistema web para ajustes de inventario con aprobación, roles, auditoría, PDF multipágina, firmas, importación masiva y separación por empresa.",
    problem: "El proceso de ajustes de inventario necesitaba trazabilidad, aprobación formal, control por empresa y generación de documentos.",
    solution: "Diseñé una plataforma con Python, Flask y SQL Server para crear ajustes, aprobarlos, generar PDF, registrar auditoría y gestionar información por empresa.",
    features: ["Flujo usuario → gerente → analista", "PDF multipágina con firmas", "Importación de costos e ítems", "Dashboard con filtros", "Auditoría e historial", "Separación por empresa"],
    tags: ["Python", "Flask", "SQL Server", "ReportLab", "Roles", "PDF"]
  },
  {
    title: "Kyvora Contracts",
    category: "Sistema web · Documentos PDF",
    filter: "web",
    description: "Plataforma para generar documentos de TI, capturar firmas digitales, guardar historial, buscar registros y descargar PDF.",
    problem: "La generación de contratos, entregas y descargos de equipos podía ser manual, lenta y difícil de consultar.",
    solution: "Construí una aplicación con formularios, firma canvas, PDF automático, historial y descarga de documentos.",
    features: ["Firma digital con canvas", "PDF con formato profesional", "Historial de documentos", "Búsqueda y descarga", "Login y roles"],
    tags: ["Flask", "SQLite", "ReportLab", "Firma digital", "PDF"]
  },
  {
    title: "Kyvora Access Flow",
    category: "Workflow · Usuarios · Aprobaciones",
    filter: "web",
    description: "Sistema para solicitudes de creación de usuarios con firma del solicitante, aprobación de gerente, firma final de TI y PDF final.",
    problem: "La creación de usuarios necesitaba aprobación formal, evidencia de firmas y notificaciones durante el flujo.",
    solution: "Diseñé un flujo profesional donde el solicitante firma, el gerente aprueba, TI ejecuta y el sistema genera un PDF final.",
    features: ["Firma al enviar solicitud", "Aprobación de gerente", "Firma de TI", "Correo y notificaciones", "PDF final con firmas"],
    tags: ["Workflow", "Aprobaciones", "Usuarios", "PDF", "Firmas"]
  },
  {
    title: "Kyvora Power Apps Requests",
    category: "Power Platform · Formularios internos",
    filter: "powerplatform",
    description: "Aplicación en Power Apps para capturar solicitudes internas, validar información y centralizar el seguimiento del proceso.",
    problem: "Los usuarios necesitaban un formulario simple para registrar solicitudes sin depender de correos o archivos sueltos.",
    solution: "Diseñé una app conectada a SharePoint Lists con campos controlados, estados y estructura lista para automatización.",
    features: ["Formulario Power Apps", "SharePoint Lists", "Estados del proceso", "Validación de campos", "Experiencia móvil"],
    tags: ["Power Apps", "SharePoint", "Low Code", "Forms"]
  },
  {
    title: "Kyvora Approval Automations",
    category: "Power Automate · Aprobaciones",
    filter: "powerplatform",
    description: "Flujos en Power Automate para enviar aprobaciones, actualizar estados, registrar comentarios y notificar a los responsables.",
    problem: "Las aprobaciones manuales por correo eran difíciles de rastrear y podían perder seguimiento.",
    solution: "Implementé flujos de aprobación con notificaciones, actualización automática de estado y registro de la respuesta.",
    features: ["Aprobaciones automáticas", "Notificaciones", "Actualización de SharePoint", "Comentarios", "Trazabilidad"],
    tags: ["Power Automate", "Approvals", "SharePoint", "Outlook"]
  },
  {
    title: "Kyvora Reports Dashboard",
    category: "Power BI · Reportes",
    filter: "powerplatform",
    description: "Dashboard de seguimiento para visualizar solicitudes, estados, tiempos, volumen de casos y métricas operativas.",
    problem: "La operación necesitaba visibilidad rápida del estado de los procesos y volumen de solicitudes.",
    solution: "Construí reportes conectados a datos estructurados para visualizar indicadores y apoyar la toma de decisiones.",
    features: ["Indicadores de estado", "Filtros", "Gráficos", "Seguimiento por responsable", "Métricas operativas"],
    tags: ["Power BI", "Reporting", "Dashboards", "Data"]
  },
  {
    title: "Kyvora SAP Docs",
    category: "Sistema web · Documentos operativos",
    filter: "web",
    description: "Aplicación para gestión de órdenes y documentos operativos con PDF, estados, roles y país.",
    problem: "Era necesario organizar documentos, estados y seguimiento en una interfaz moderna.",
    solution: "Desarrollo de sistema web con login, dashboard, roles, estados y generación de PDF.",
    features: ["Login y roles", "Dashboard", "PDF", "Estado de documentos", "Soporte por país"],
    tags: ["Node", "Express", "PDF", "Dashboard"]
  },
  {
    title: "Kyvora Supplier Portal",
    category: "Sistema web · Proveedores",
    filter: "web",
    description: "Interfaz para gestión de proveedores con dashboard, tabla de datos, importación, exportación y modo oscuro/claro.",
    problem: "Se necesitaba una interfaz clara para visualizar y manejar datos de proveedores.",
    solution: "Construcción de interfaz moderna con navegación, tabla, acciones y experiencia visual profesional.",
    features: ["Dashboard", "Tabla de datos", "Importación", "Exportación", "Tema claro/oscuro"],
    tags: ["Angular", "UI", "Dashboard", "Data"]
  },
  {
    title: "Automatización de desbloqueo AD",
    category: "Automatización · Active Directory",
    filter: "automation",
    description: "Script y tarea programada para validar y desbloquear usuarios específicos en Active Directory desde servidor.",
    problem: "Algunos bloqueos de usuario requerían intervención repetitiva del equipo de TI.",
    solution: "Creé una automatización con PowerShell y Task Scheduler para ejecutar validaciones y acciones programadas.",
    features: ["PowerShell", "Task Scheduler", "Active Directory", "Ejecución desde servidor", "Escalable a varios usuarios"],
    tags: ["PowerShell", "AD", "Windows Server", "Automation"]
  },
  {
    title: "Automatización de instalación de equipos",
    category: "Automatización · Soporte TI",
    filter: "automation",
    description: "Guion para automatizar instalación de aplicaciones corporativas en equipos nuevos o formateados.",
    problem: "La preparación de equipos podía requerir muchos pasos manuales y repetitivos.",
    solution: "Diseñé un flujo de instalación con orden de aplicaciones, confirmaciones y menor intervención manual.",
    features: ["Instalación guiada", "Orden de aplicaciones", "Confirmaciones", "Reducción de tiempo", "Preparación de PCs"],
    tags: ["PowerShell", "Windows", "Automation", "Soporte TI"]
  },
  {
    title: "Administración Microsoft 365 e Intune",
    category: "Microsoft 365 · Intune · Exchange",
    filter: "microsoft",
    description: "Gestión de usuarios, licencias, buzones, políticas, dispositivos, MFA, registros de autenticación y soporte avanzado.",
    problem: "Los entornos Microsoft requieren control de accesos, seguridad, autenticación y administración continua.",
    solution: "Administración de Microsoft 365, Exchange Online, Intune y revisión de autenticaciones para resolver incidencias de usuarios.",
    features: ["Gestión de usuarios", "Exchange Online", "Intune", "MFA", "Logs de inicio de sesión", "Políticas de dispositivos"],
    tags: ["Microsoft 365", "Intune", "Exchange", "MFA"]
  },
  {
    title: "Despliegue Flask en Windows Server",
    category: "Infraestructura · Deploy interno",
    filter: "infra",
    description: "Preparación de aplicaciones Flask para ejecución interna usando Waitress, firewall, puertos y configuración local/empresarial.",
    problem: "Las aplicaciones internas necesitan correr de forma estable y accesible dentro de la red empresarial.",
    solution: "Preparé la estructura para ejecutar Flask con Waitress, variables de entorno, SQL Server y base para Docker.",
    features: ["Waitress", "Firewall", "Puertos", "SQL Server", "Docker-ready", "Windows Server"],
    tags: ["Flask", "Waitress", "Docker", "Windows Server"]
  }
];

const quickItems = [
  { label: "Inicio", type: "Sección", target: "#inicio" },
  { label: "Perfil profesional", type: "Sección", target: "#perfil" },
  { label: "Experiencia", type: "Sección", target: "#experiencia" },
  { label: "Automatizaciones", type: "Sección", target: "#automatizaciones" },
  { label: "Habilidades", type: "Sección", target: "#habilidades" },
  { label: "Proyectos", type: "Sección", target: "#proyectos" },
  { label: "Contacto", type: "Sección", target: "#contacto" },
  ...projects.map((project, index) => ({ label: project.title, type: "Proyecto", projectIndex: index }))
];

const loader = document.getElementById("loader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const commandBtn = document.getElementById("commandBtn");
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const projectsGrid = document.getElementById("projectsGrid");
const projectFilters = document.getElementById("projectFilters");
const projectModal = document.getElementById("projectModal");
const commandPalette = document.getElementById("commandPalette");
const commandSearch = document.getElementById("commandSearch");
const commandResults = document.getElementById("commandResults");
const typewriter = document.getElementById("typewriter");
const terminalText = document.getElementById("terminalText");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const contactNote = document.getElementById("contactNote");
const year = document.getElementById("year");
const email = "rickit60@gmail.com";

year.textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hidden"), 500);
});

navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("portfolio-theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("portfolio-theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

const sections = [...document.querySelectorAll("main section[id]")];

function updateScrollUI() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
  backToTop.classList.toggle("visible", window.scrollY > 600);

  let activeId = "inicio";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) activeId = section.id;
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
}

window.addEventListener("scroll", updateScrollUI);
updateScrollUI();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 50));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + "+";
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 25);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.8 });

document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

const words = ["Power Automate.", "Power Apps.", "Power BI.", "Python.", "Flask.", "SQL Server.", "PowerShell.", "Microsoft 365."];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function runTypewriter() {
  const currentWord = words[wordIndex];
  if (!deleting) {
    typewriter.textContent = currentWord.slice(0, charIndex + 1);
    charIndex += 1;
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(runTypewriter, 1200);
      return;
    }
  } else {
    typewriter.textContent = currentWord.slice(0, charIndex - 1);
    charIndex -= 1;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(runTypewriter, deleting ? 45 : 85);
}
runTypewriter();

const terminalLines = [
  "$ kyvora --profile rickis-pineda",
  "✓ soporte técnico empresarial",
  "✓ Microsoft 365 / Intune / Exchange",
  "✓ Power Platform / Power Automate",
  "✓ PowerShell / Python automation",
  "",
  "$ build --automation-suite",
  "✓ apps + flows + dashboards",
  "✓ PDF + firmas + auditoría",
  "✓ workflows + notifications",
  "",
  "status: ready_to_publish"
];

let terminalLine = 0;
let terminalChar = 0;

function typeTerminal() {
  if (terminalLine >= terminalLines.length) {
    setTimeout(() => {
      terminalText.textContent = "";
      terminalLine = 0;
      terminalChar = 0;
      typeTerminal();
    }, 2000);
    return;
  }

  const line = terminalLines[terminalLine];
  terminalText.textContent += line[terminalChar] || "";
  terminalChar += 1;

  if (terminalChar > line.length) {
    terminalText.textContent += "\n";
    terminalLine += 1;
    terminalChar = 0;
    setTimeout(typeTerminal, 240);
  } else {
    setTimeout(typeTerminal, 28);
  }
}
typeTerminal();

function renderProjects(filter = "todos") {
  projectsGrid.innerHTML = "";
  const filtered = filter === "todos" ? projects : projects.filter((project) => project.filter === filter);

  filtered.forEach((project) => {
    const originalIndex = projects.indexOf(project);
    const card = document.createElement("article");
    card.className = "project-card reveal visible";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Abrir proyecto ${project.title}`);

    card.innerHTML = `
      <div class="project-visual">
        <div class="project-screen">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div class="project-content">
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `;

    card.addEventListener("click", () => openProjectModal(originalIndex));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") openProjectModal(originalIndex);
    });

    projectsGrid.appendChild(card);
  });
}

renderProjects();

projectFilters.addEventListener("click", (event) => {
  const btn = event.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

function openProjectModal(index) {
  const project = projects[index];
  document.getElementById("modalCategory").textContent = project.category;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalProblem").textContent = project.problem;
  document.getElementById("modalSolution").textContent = project.solution;
  document.getElementById("modalFeatures").innerHTML = project.features.map((feature) => `<li>${feature}</li>`).join("");
  document.getElementById("modalTags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeProjectModal));

function openCommandPalette() {
  commandPalette.classList.add("open");
  commandPalette.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  commandSearch.value = "";
  renderCommandResults("");
  setTimeout(() => commandSearch.focus(), 80);
}

function closeCommandPalette() {
  commandPalette.classList.remove("open");
  commandPalette.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderCommandResults(query) {
  const clean = query.trim().toLowerCase();
  const filtered = quickItems.filter((item) => item.label.toLowerCase().includes(clean));
  commandResults.innerHTML = filtered.map((item) => `
    <div class="command-result" data-index="${quickItems.indexOf(item)}">
      <strong>${item.label}</strong>
      <span>${item.type}</span>
    </div>
  `).join("");
  if (!filtered.length) commandResults.innerHTML = `<div class="command-result"><span>No encontré resultados.</span></div>`;
}

commandBtn.addEventListener("click", openCommandPalette);

document.addEventListener("keydown", (event) => {
  const isCommand = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
  if (isCommand) {
    event.preventDefault();
    openCommandPalette();
  }
  if (event.key === "Escape") {
    closeCommandPalette();
    closeProjectModal();
  }
});

commandSearch.addEventListener("input", () => renderCommandResults(commandSearch.value));

commandResults.addEventListener("click", (event) => {
  const result = event.target.closest(".command-result");
  if (!result || !result.dataset.index) return;
  const item = quickItems[Number(result.dataset.index)];
  closeCommandPalette();
  if (item.type === "Proyecto") {
    setTimeout(() => openProjectModal(item.projectIndex), 150);
  } else {
    document.querySelector(item.target).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelectorAll("[data-close-command]").forEach((el) => el.addEventListener("click", closeCommandPalette));

copyEmailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    contactNote.innerHTML = `Correo copiado: <strong>${email}</strong>`;
    copyEmailBtn.textContent = "Correo copiado ✓";
    setTimeout(() => copyEmailBtn.textContent = "Copiar correo", 1600);
  } catch {
    contactNote.innerHTML = `Correo: <strong>${email}</strong>`;
  }
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.05}px, ${y * 0.08}px)`;
  });
  button.addEventListener("mouseleave", () => button.style.transform = "");
});

const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles();
}

function createParticles() {
  const count = Math.min(70, Math.floor(window.innerWidth / 18));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.8 + 0.6
  }));
}

function drawNetwork() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const dotColor = isDark ? "rgba(96, 165, 250, 0.50)" : "rgba(37, 99, 235, 0.34)";
  const lineColor = isDark ? "rgba(96, 165, 250, 0.14)" : "rgba(37, 99, 235, 0.10)";

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1 - distance / 120;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawNetwork);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawNetwork();
