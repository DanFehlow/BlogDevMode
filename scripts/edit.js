const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item))
const database = getLocalStorage('database')
const index = getLocalStorage('index')
const form = document.getElementById('form')
const checkFields = () => {
  return form.reportValidity()
}
document.getElementById('text-title').value = database[index].title
document.getElementById('name').value = database[index].name
document.getElementById('text').value = database[index].text
document.getElementById('urlimage').value = database[index].urlimage

const edit = () => {
  if (!checkFields()) {
    return null
  }
  const index = getLocalStorage('index')
  const database = getLocalStorage('database')

  const name = document.getElementById('name')
  const text = document.getElementById('text')
  const title = document.getElementById('text-title')
  const urlimage = document.getElementById('urlimage')
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
  
  const newdatabase = {
    title: title.value,
    name: name.value,
    text: text.value,
    urlimage: urlimage.value,
    date: datea,
  }
  
  database[index] = newdatabase
  localStorage.setItem('database', JSON.stringify(database))
  url = 'post.html'
  window.open(url, '_self')
}
updadepost = document.getElementById('button')
updadepost.addEventListener('click', edit)
