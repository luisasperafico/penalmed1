document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');
    const readMoreLinks = document.querySelectorAll('.read-more');
    const readLessLinks = document.querySelectorAll('.read-less');

    newsItems.forEach(item => {
        item.addEventListener('click', () => {
          newsItems.forEach(news => {
            news.classList.remove('active', 'expanded');
            news.querySelector('.read-less').style.display = 'none';
            news.querySelector('.read-more').style.display = 'inline';
          });
          item.classList.add('active', 'expanded');
        });
      });