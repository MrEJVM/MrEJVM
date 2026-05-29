// ===== FUNÇÃO PARA MENSAGEM =====
function mostrarMensagem(rede) {
    // Cria elemento de notificação
    var notificacao = document.createElement('div');
    notificacao.textContent = '🔴 ' + rede + ': Em breve disponível! 🌋';
    notificacao.style.position = 'fixed';
    notificacao.style.bottom = '20px';
    notificacao.style.left = '50%';
    notificacao.style.transform = 'translateX(-50%)';
    notificacao.style.background = 'linear-gradient(135deg, #cc3300, #8b0000)';
    notificacao.style.color = '#fff';
    notificacao.style.padding = '12px 24px';
    notificacao.style.borderRadius = '50px';
    notificacao.style.fontWeight = 'bold';
    notificacao.style.zIndex = '1000';
    notificacao.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    notificacao.style.border = '1px solid #ff6600';
    notificacao.style.fontFamily = 'monospace';
    notificacao.style.letterSpacing = '1px';
    notificacao.style.animation = 'slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards';
    
    document.body.appendChild(notificacao);
    
    // Remove notificação após 3 segundos
    setTimeout(function() {
        if (notificacao.remove) notificacao.remove();
    }, 3000);
}

// ===== ANIMAÇÕES CSS ADICIONAIS =====
var styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
    
    /* Efeito de tremor no container */
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
    
    .container:hover {
        animation: shake 0.2s ease-in-out 2;
    }
`;
document.head.appendChild(styleSheet);

// ===== LOG NO CONSOLE =====
console.log('%c🌋 CARTÃO DIGITAL VULCÂNICO ATIVADO! 🔥', 'color: #ff6600; font-size: 16px; font-weight: bold;');
console.log('%cBem-vindo ao meu projeto vulcânico!', 'color: #ff9966; font-size: 12px;');
