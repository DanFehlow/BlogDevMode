let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
let setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item))
database = getLocalStorage('database')
index = getLocalStorage('index')
let form = document.getElementById('form')
const checkFields = () => {
  return form.reportValidity()
}
let updadepost = document.getElementById('button')
updadepost.addEventListener('click', edit)
document.getElementById('texttitle').value = database[index].title
document.getElementById('name').value = database[index].name
document.getElementById('text').value = database[index].text
document.getElementById('urlimage').value = database[index].urlimage

function edit() {
  if (!checkFields()) {
    return null
  }
  index = getLocalStorage('index')
  database = getLocalStorage('database')

  //fillfields(database)
  let name = document.getElementById('name')
  let text = document.getElementById('text')
  let title = document.getElementById('texttitle')
  let urlimage = document.getElementById('urlimage')
  date = new Date()
  let meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]
  datea = `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`

  let newdatabase = {
    title: title.value,
    name: name.value,
    text: text.value,
    urlimage: urlimage.value,
    date: datea,
  }
  //quando coloco um novo valor no array, o array original não muda
  database[index] = newdatabase
  localStorage.setItem('database', JSON.stringify(database))
  url = 'post.html'
  window.open(url, '_self')
}
