const apiURL = 'https://rickandmortyapi.com/api/character/';

function getData(keyword = '') {
  if (isNaN(Number(keyword)) || keyword === 0) {
    return Promise.resolve({ ok: false });
  }
  return fetch(`${apiURL}${keyword}`)
    .then(res => res.json())
    .then(responseJson => {
      const response = keyword !== '' ? responseJson : responseJson.results;
      return { ok: true, response };
    });
}

export default getData;
