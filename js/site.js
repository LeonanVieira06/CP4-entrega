(() => {
    "use strict";
    const STORAGE_KEY = "portfolio-leonan-alto-contraste";
    const body = document.body;
    const contrastButton = document.getElementById("alternar-contraste");

    function aplicarContraste(ativado) {
        body.classList.toggle("alto-contraste", ativado);
        if (contrastButton) {
            contrastButton.setAttribute("aria-pressed", String(ativado));
            contrastButton.textContent = ativado ? "Alto contraste: ligado" : "Alto contraste: desligado";
            contrastButton.setAttribute("aria-label", ativado
                ? "Desativar modo de alto contraste" : "Ativar modo de alto contraste");
        }
    }

    let contrasteSalvo = false;
    try { contrasteSalvo = localStorage.getItem(STORAGE_KEY) === "true"; } catch (erro) {}
    aplicarContraste(contrasteSalvo);

    if (contrastButton) {
        contrastButton.addEventListener("click", () => {
            const novoEstado = !body.classList.contains("alto-contraste");
            aplicarContraste(novoEstado);
            try { localStorage.setItem(STORAGE_KEY, String(novoEstado)); } catch (erro) {}
        });
    }

    const urgencia = document.getElementById("urgencia");
    const valorUrgencia = document.getElementById("valor-urgencia");
    if (urgencia && valorUrgencia) {
        urgencia.addEventListener("input", () => { valorUrgencia.textContent = urgencia.value; });
    }

    const canvas = document.getElementById("grafico-canvas");
    const botaoGrafico = document.getElementById("redesenhar-grafico");
    const statusGrafico = document.getElementById("status-grafico");

    function desenharGrafico() {
        if (!canvas) return;
        const contexto = canvas.getContext("2d");
        if (!contexto) {
            if (statusGrafico) statusGrafico.textContent = "Seu navegador não oferece suporte ao Canvas.";
            return;
        }
        const escala = window.devicePixelRatio || 1;
        const largura = canvas.clientWidth || 720;
        const altura = 320;
        canvas.width = Math.round(largura * escala);
        canvas.height = Math.round(altura * escala);
        contexto.setTransform(escala, 0, 0, escala, 0, 0);
        contexto.clearRect(0, 0, largura, altura);
        const dados = [
            { nome: "HTML/CSS", valor: 90 }, { nome: "JavaScript", valor: 70 },
            { nome: "UI/Design", valor: 55 }, { nome: "Acessibilidade", valor: 75 }
        ];
        const margem = { topo: 28, direita: 18, baixo: 58, esquerda: 42 };
        const area = largura - margem.esquerda - margem.direita;
        const base = altura - margem.baixo;
        const passo = area / dados.length;
        const barra = Math.min(66, passo * 0.52);
        const corTexto = body.classList.contains("alto-contraste") ? "#000000" : "#263746";
        contexto.strokeStyle = corTexto;
        contexto.beginPath();
        contexto.moveTo(margem.esquerda, margem.topo);
        contexto.lineTo(margem.esquerda, base);
        contexto.lineTo(largura - margem.direita, base);
        contexto.stroke();
        dados.forEach((item, i) => {
            const x = margem.esquerda + passo * i + (passo - barra) / 2;
            const h = (item.valor / 100) * (base - margem.topo);
            const y = base - h;
            contexto.fillStyle = "#286477";
            contexto.fillRect(x, y, barra, h);
            contexto.fillStyle = corTexto;
            contexto.textAlign = "center";
            contexto.font = "14px Arial";
            contexto.fillText(item.valor + "%", x + barra / 2, y - 8);
            contexto.font = "12px Arial";
            contexto.fillText(item.nome, x + barra / 2, base + 24);
        });
        if (statusGrafico) statusGrafico.textContent = "Gráfico atualizado com sucesso.";
    }
    if (canvas) {
        desenharGrafico();
        window.addEventListener("resize", desenharGrafico);
    }
    if (botaoGrafico) botaoGrafico.addEventListener("click", desenharGrafico);

    const formulario = document.getElementById("form-contato");
    const statusFormulario = document.getElementById("status-formulario");
    if (formulario && statusFormulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                statusFormulario.textContent = "Confira os campos obrigatórios antes de continuar.";
                return;
            }
            statusFormulario.textContent =
                "Formulário validado! Esta demonstração não envia nem armazena seus dados.";
        });
    }
})();
