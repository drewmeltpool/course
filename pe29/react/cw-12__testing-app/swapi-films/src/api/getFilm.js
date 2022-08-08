const getFilm = (id) => {
    return fetch(`https://ajax.test-danit.com/api/swapi/films/${id}`)
    .then(response => response.json())
}
export default getFilm
