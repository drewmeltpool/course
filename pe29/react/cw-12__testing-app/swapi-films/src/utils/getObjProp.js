const getObjProp = (obj, prop) => {
    if (typeof obj === 'object' && obj !== null) {
        return obj[prop];
    }
}

export default getObjProp
