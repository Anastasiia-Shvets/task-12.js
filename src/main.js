import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { searchGallery } from './js/pixabay-api';
import { hitsTemplate } from './js/render-functions';
import { refs } from './js/refs';

let lightbox;
let query;
let page;
let maxPage;

refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);


async function onFormSubmit(ev) {
    ev.preventDefault();
    query = ev.target.elements.query.value.trim();
    page = 1;
    if (!query) {
        showError('Please enter text to search for.');
        return;
    }
    showLoader();

    try {
        const data = await searchGallery(query, page);
        if (data.totalHits === 0) {
            showError(
                'Sorry, there are no images matching your search query. Please try again!'
            );
            hideLoader();
            return;
        }
        maxPage = Math.ceil(data.totalHits / 15);
        refs.listElem.innerHTML = '';
        renderHits(data.hits);
    } catch (error) {
        showError(error.message);
        maxPage = 0;
        refs.listElem.innerHTML = '';
    }

    hideLoader();
    checkBtnStatus();

    ev.target.reset();
}

async function onLoadMoreClick() {
    page += 1;
    showLoader();
    const data = await searchGallery(query);
    renderHits(data.hits);
    hideLoader();
    checkBtnStatus();
    const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

function renderHits(hits) {
    const options = {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        animation: 250,
    };
    const markupGallery = hitsTemplate(hits);
    refs.listElem.insertAdjacentHTML('beforeend', markupGallery);

    if (lightbox) {
        lightbox.destroy();
    }

    lightbox = new SimpleLightbox('.gallery a', options);
}

function showLoader() {
    refs.loadElem.classList.remove('hidden');
}

function hideLoader() {
    refs.loadElem.classList.add('hidden');
}

function showLodeMore() {
    refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
    refs.btnLoadMore.classList.add('hidden');
}

function checkBtnStatus() {
    if (page >= maxPage) {
        hideLoadMore();
        alert();
    } else {
        showLodeMore();
    }
}

function showError(msg) {
    iziToast.error({
        title: 'Error',
        message: msg,
        position: 'topRight',
    });
}

function alert() {
    iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
    });
}