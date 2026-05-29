function mostrarMensagem(rede) {
    var toast = document.createElement('div');
    toast.innerHTML = '🌋 ' + rede + ' - Em breve! 🔥';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#cc3300';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '25px';
    toast.style.fontWeight = 'bold';
    toast.style.zIndex = '9999';
    toast.style.boxShadow = '0 0 10px #ff6600';
    toast.style.fontFamily = 'monospace';
    
    document.body.appendChild(toast);
    
    setTimeout(function() {
        if (toast.remove) toast.remove();
    }, 2000);
}

console.log('🌋 Cartão Vulcânico Ativado!');
