// Seleciona todos os elementos com a classe "read-more"
const readMoreButtons = document.querySelectorAll('.read-more');

// Adiciona um evento de clique a cada botão
readMoreButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Seleciona o elemento pai do botão (o container da notícia)
    const newsItem = button.parentNode.parentNode;

    // Seleciona o texto curto e o texto longo da notícia
    const shortText = newsItem.querySelector('.short-text');
    const fullText = newsItem.querySelector('.full-text');
    const readLessButton = newsItem.querySelector('.read-less');

    // Mostra ou esconde o texto longo da notícia
    if (fullText.style.display === 'none') {
      fullText.style.display = 'block';
      shortText.style.display = 'none';
      button.style.display = 'none';
      readLessButton.style.display = 'block';
    }
  });
});

// Seleciona todos os elementos com a classe "read-less"
const readLessButtons = document.querySelectorAll('.read-less');

// Adiciona um evento de clique a cada botão
readLessButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Seleciona o elemento pai do botão (o container da notícia)
    const newsItem = button.parentNode.parentNode;

    // Seleciona o texto curto e o texto longo da notícia
    const shortText = newsItem.querySelector('.short-text');
    const fullText = newsItem.querySelector('.full-text');
    const readMoreButton = newsItem.querySelector('.read-more');

    // Mostra ou esconde o texto longo da notícia
    if (fullText.style.display === 'block') {
      fullText.style.display = 'none';
      shortText.style.display = 'block';
      button.style.display = 'none';
      readMoreButton.style.display = 'block';
    }
  });
});
function highlightNews(leiId) {
    // Obtém a seção da lei correspondente ao ID
    var selectedLei = document.getElementById(leiId);
    
    // Obtém o título e o conteúdo da seção selecionada
    var title = selectedLei.querySelector('h2').innerText;
    var content = selectedLei.querySelector('p').innerText;
    
    // Atualiza a área de destaque com o título e conteúdo da lei selecionada
    var highlight = document.getElementById('news-highlight');
    highlight.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
}
