export default $axios => (
  {
    fetch(query) {
      return $axios
        .$get(`${process.env.tmbdBaseUrl}search/tv?api_key=${process.env.tmbdApiKey}&language=en-US&query=${query}`);
    }
  }
);
