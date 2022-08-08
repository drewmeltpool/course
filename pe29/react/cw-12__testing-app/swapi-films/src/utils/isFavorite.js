const isFavorite = (id, favorites) => favorites.some(favorite => favorite.id === id)

export default isFavorite
