const apiURL = 'https://rickandmortyapi.com/api/character/';

async function getData(keyword = '') {
  if (isNaN(Number(keyword)) || keyword === 0) {
    return Promise.resolve({ ok: false });
  }
  const res = await fetch(`${apiURL}${keyword}`);
  const responseJson = await res.json();
  const response = await (keyword !== '' ? responseJson : responseJson.results);
  return { ok: true, response };
}

export default getData;
