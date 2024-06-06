// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

// *********************** Кнопка "Load More" ************************** \\

// const elements = {
//   list: document.querySelector(".js-movie-list"),
//   loadMore: document.querySelector(".js-load-more"),
// };

// let page = 1

// function handlerLoadMore() {
//   page += 1;
//   serviceMovie(page)
//     .then((data) => {
//       elements.list.insertAdjacentHTML("beforeend", createMarkup(data.results));

//       if (data.page >= Math.min(500, data.total_pages)) {
//         elements.loadMore.classList.replace("load-more", "load-more-hidden");
//       }
//     })
//     .catch(console.error);
// }

// function serviceMovie(page = 1) {
//   const BASE_URL = "https://api.themoviedb.org/3/trending/movie/week";
//   const API_KEY = "345007f9ab440e5b86cef51be6397df1";

//   const params = new URLSearchParams({
//     api_key: API_KEY,
//     page,
//   });

//   return fetch(`${BASE_URL}?${params}`).then((resp) => {
//     if (!resp.ok) {
//       console.log(resp);
//       throw new Error(`Some Error with status code ${resp.status}`);
//     }
//     return resp.json();
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title, vote_average, release_date }) => `
//     <li class="movie-card">
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" />
//         <div class="movie-info">
//           <h2>${title}</h2>
//           <p>Release Date: ${release_date}</p>
//           <p>Vote Average: ${vote_average}</p>
//         </div>
//     </li>`
//     )
//     .join("");
// }

// serviceMovie(page)
//   .then((data) => {
//     console.log(data);
//     elements.list.insertAdjacentHTML("afterbegin", createMarkup(data.results));

//     if (data.page < Math.min(500, data.total_pages)) {
//       elements.loadMore.classList.replace("load-more-hidden", "load-more");

//       elements.loadMore.addEventListener("click", handlerLoadMore);
//     }
//   })
//   .catch(console.error);

// ********************************Infinity scroll ********************** \\
let options = {
  root: null,
  rootMargin: "300px",
  // threshold: 1.0,
};

const observer = new IntersectionObserver(handlerLoadMore, options);

const elements = {
  list: document.querySelector(".js-movie-list"),
  guard: document.querySelector(".js-guard"),
};

let page = 1;

serviceMovie(page).then((data) => {
  elements.list.insertAdjacentHTML("afterbegin", createMarkup(data.results));

  if (data.page < Math.min(500, data.total_pages)) {
    observer.observe(elements.guard);
  }
});

function serviceMovie(page = 1) {
  const BASE_URL = "https://api.themoviedb.org/3/trending/movie/week";
  const API_KEY = "345007f9ab440e5b86cef51be6397df1";

  const params = new URLSearchParams({
    api_key: API_KEY,
    page,
  });

  return fetch(`${BASE_URL}?${params}`).then((resp) => {
    if (!resp.ok) {
      console.log(resp);
      throw new Error(`Some Error with status code ${resp.status}`);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title, vote_average, release_date }) => `
      <li class="movie-card">
          <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}" />
          <div class="movie-info">
            <h2>${title}</h2>
            <p>Release Date: ${release_date}</p>
            <p>Vote Average: ${vote_average}</p>
          </div>
      </li>`
    )
    .join("");
}

function handlerLoadMore(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      page += 1;

      serviceMovie(page).then((data) => {
        elements.list.insertAdjacentHTML(
          "beforeend",
          createMarkup(data.results)
        );

        if (data.page >= Math.min(500, data.total_pages)) {
          observer.unobserve(elements.guard);
        }
      });
    }
  });
}
