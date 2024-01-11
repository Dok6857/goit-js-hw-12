import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  gallery.innerHTML = '';
  input.value = '';
  loader.style.display = 'block';

  const searchParams = new URLSearchParams({
    key: '41544078-5d11fd93221b0dd23a16f477d',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      loader.style.display = 'none';
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          theme: 'dark',
          backgroundColor: '#EF4040',
          titleColor: 'white',
          position: 'topRight',
        });
        return;
      }
      const imgs = data.hits.reduce(
        (
          html,
          {
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }
        ) =>
          html +
          `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
           <img class="gallery-image"
           src="${webformatURL}"
           alt="${tags}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${likes}</span></p>
          <p>Views:<span>${views}</span></p>
          <p>Comments:<span>${comments}</span></p>
          <p>Downloads:<span>${downloads}</span></p>
          </div> 
        </li>`,
        ''
      );

      gallery.innerHTML = imgs;

      let modal = new simpleLightbox('ul.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
      });

      modal.refresh();
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        message: error.message,
        color: 'red',
        position: 'topCenter',
      });
      console.error('Error fetching data:', error);
    });
});
