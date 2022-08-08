const genAcronym = str => 
    str
        .split(' ')
        .map(item => {
            if (!isNaN(Number(item))) return ''
            return item[0].toUpperCase()
        })
        .join('')

export default genAcronym

// Federal Bureau of Investigation -> FBI