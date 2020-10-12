export default $axios => (
  {
    fetch(query) {
      return $axios
        .$get(`${process.env.tmbdBaseUrl}search/tv?api_key=${process.env.tmbdApiKey}&language=en-US&query=${query}`);
    },
    save(serie) {
      return new Promise(resolve => {
        let seriesWatched = JSON.parse(localStorage.getItem('seriesWatched'));
        if (!seriesWatched) {
          seriesWatched = [];
        }
        seriesWatched.push(serie);
        localStorage.setItem('seriesWatched', JSON.stringify(seriesWatched));
        resolve(seriesWatched);
      });
    },
    remove(serie) {
      return new Promise((resolve, reject) => {
        let seriesWatched = JSON.parse(localStorage.getItem('seriesWatched'));
        if (!seriesWatched) {
          reject();
          return;
        }
        seriesWatched = seriesWatched.filter(item => item.id !== serie.id);
        localStorage.setItem('seriesWatched', JSON.stringify(seriesWatched));
        resolve(seriesWatched);
      });
    },
    get() {
      return new Promise(resolve => {
        let seriesWatched = JSON.parse(localStorage.getItem('seriesWatched'));
        if (!seriesWatched) {
          seriesWatched = [];
        }
        resolve(seriesWatched);
      });
    }
  }
);
