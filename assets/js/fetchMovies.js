const movieSections = document.querySelectorAll('.movies-list.has-scrollbar');

function InsertMovies(upcoming) {
  movieSections.forEach(movieSection => {
    movieSection.innerHTML = ''; // Limpa o conteúdo atual da seção
    upcoming.forEach(movie => {
      const movieId = movie.id;
      const title = movie.title;
      const releaseYear = movie.release_date.split('-')[0];
      const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      const rating = movie.vote_average.toFixed(1);
      const duration = movie.runtime || '128'; // Usar '128' se a duração não estiver disponível

      const overview = movie.overview;

      const li = document.createElement('li');

      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';

      const anchor = document.createElement('a');
      anchor.href = '#';

      const figure = document.createElement('figure');
      figure.className = 'card-banner';

      const img = document.createElement('img');
      img.src = posterPath;
      img.alt = title;

      figure.appendChild(img);
      anchor.appendChild(figure);
      movieCard.appendChild(anchor);

      const titleWrapper = document.createElement('div');
      titleWrapper.className = 'title-wrapper';

      const titleAnchor = document.createElement('a');
      titleAnchor.href = '#';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent = title;

      titleAnchor.appendChild(cardTitle);
      titleWrapper.appendChild(titleAnchor);

      const time = document.createElement('time');
      time.setAttribute('datetime', releaseYear);
      time.textContent = releaseYear;

      titleWrapper.appendChild(time);
      movieCard.appendChild(titleWrapper);

      const cardMeta = document.createElement('div');
      cardMeta.className = 'card-meta';

      const badge = document.createElement('div');
      badge.className = 'badge badge-outline';
      badge.textContent = '4K';

      cardMeta.appendChild(badge);

      const durationDiv = document.createElement('div');
      durationDiv.className = 'duration';

      const durationIcon = document.createElement('ion-icon');
      durationIcon.setAttribute('name', 'time-outline');

      const durationTime = document.createElement('time');
      durationTime.setAttribute('datetime', `PT${duration}M`);
      durationTime.textContent = `${duration} min`;

      durationDiv.appendChild(durationIcon);
      durationDiv.appendChild(durationTime);
      cardMeta.appendChild(durationDiv);

      const ratingDiv = document.createElement('div');
      ratingDiv.className = 'rating';

      const ratingIcon = document.createElement('ion-icon');
      ratingIcon.setAttribute('name', 'star');

      const ratingData = document.createElement('data');
      ratingData.textContent = rating;

      ratingDiv.appendChild(ratingIcon);
      ratingDiv.appendChild(ratingData);
      cardMeta.appendChild(ratingDiv);

      movieCard.appendChild(cardMeta);

      li.appendChild(movieCard);

      movieSection.appendChild(li); // Adiciona o item à seção de filmes atual
    });
  });
}

export { InsertMovies };
