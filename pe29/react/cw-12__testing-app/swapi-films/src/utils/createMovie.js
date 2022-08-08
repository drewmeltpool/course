const createMovie = ({ name, duration }) => {
    return {
        name,
        duration,
        createdAt: Date.now()
    }
}

export default createMovie
