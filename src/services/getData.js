const apiURL = "https://rickandmortyapi.com/api/character/";

function getData() {
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { results } = response;
      const characters = results.map(results => {
        const { id, name, status, species, gender, image } = results;
        return { id, name, status, species, gender, image };
      });
      return characters;
    });
}

export default getData;
