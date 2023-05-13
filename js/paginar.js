function paginar(divId) {
    const elementoAtual = document.querySelector('.pagination .page-item.active');
    elementoAtual.classList.remove('active');
    
    const elementoSelecionado = document.querySelector(`.pagination [href="#${divId}"]`).parentElement;
    elementoSelecionado.classList.add('active');
    
    const itens = document.querySelectorAll('.item');
    itens.forEach((item) => {
      item.style.display = 'none';
    });
    document.getElementById(divId).style.display = 'block';
  }
  