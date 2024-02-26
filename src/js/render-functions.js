function hitTemplate(hit) {
    const {
      largeImageURL,
      webformatURL,
      alt,
      likes,
      views,
      comments,
      downloads,
    } = hit;
    return `<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${largeImageURL}">
    <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${alt}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${likes}</li></ul>
    <ul class="list-item">Views<li class="item">${views}</li></ul>
    <ul class="list-item">Comments<li class="item">${comments}</li></ul>
    <ul class="list-item">Downloads<li class="item">${downloads}</li></ul>
    </div>
    </div>
    </li>`;
}

export function hitsTemplate(hits) {
    return hits.map(hitTemplate).join('');
}


