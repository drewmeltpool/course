console.dir(new Promise((res,rej) => {
  res("ggg")
}).then(res => {
  new Promise(res).then(res => {
  })
}));