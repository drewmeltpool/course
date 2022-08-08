const getFilms = () => fetch(`https://ajax.test-danit.com/api/swapi/films`)
      .then(response => response.json())

export default getFilms