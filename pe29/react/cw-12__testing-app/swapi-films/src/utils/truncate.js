const truncate = (str, length = 10, ending = '...') =>
    str.length > length ? str.substring(0, length - ending.length) + ending : str;

export default truncate
