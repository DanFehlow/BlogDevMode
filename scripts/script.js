const addButton = () => {
  document.getElementById('modal').classList.add('active')
  firstPost()
}

const addOtherPost = () => {
  document.getElementById('modal').classList.add('active')
  firstPost()
  removeChild()
}

const removeChild = () => {
  const parent = document.querySelector('.feed')
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild)
  }
}

const firstPost = () => {
  document.querySelector('.content-container').classList.add('active')
}

const oneMorePost = () => {
  document.querySelector('#one-more-post').classList.add('active')
}

const closeModal = () => {
  clearFields()
  document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item))

const createPost = (database) => {
  const dbPost = getLocalStorage('database')
  setLocalStorage('database', [...dbPost, database])
}

const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field')
  fields.forEach((field) => (field.value = ''))
  document.getElementById('title').dataset.index = 'new'
}

const savePost = () => {
  const months = [
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
  date = new Date()
  const datea = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`
  const database = {
    title: document.getElementById('title').value,
    name: document.getElementById('name').value,
    text: document.getElementById('text').value,
    urlimage: document.getElementById('urlimage').value,
    date: datea,
  }

  const index = document.getElementById('title').dataset.index
  if (index == 'new') {
    createPost(database)
    updateFeed()
    closeModal()
  } else {
    updateFeed()
    closeModal()
  }
}
// const database = getLocalStorage('database')

const addPost = (database, index) => {
  const newPost = document.createElement('div')
  newPost.innerHTML = `
  <img src="${database.urlimage}" class="size" />
  <h3 id="title-${index}" onclick="openPost(${index})" class="title-posts">${database.title}</h3>
  <p id="text-feed">${database.text}</p>
  `
  document.querySelector('.feed').appendChild(newPost)
  oneMorePost()
}
const updateFeed = () => {
  const dbPost = getLocalStorage('database')
  dbPost.forEach(addPost)
}

// Pagina de cada Post clicado

const openPost = (index) => {
  const title = document.getElementById(`title-${index}`)
  title.addEventListener('click', () => {
    window.open(`post.html`, '_self')
    setLocalStorage('index', index)
  })
}

const openPostStorage = () => {
  const index = getLocalStorage('index')
  const database = getLocalStorage('database')[index]
  printpost(database)
}

const printpost = (database) => {
  const post = document.getElementById('contentpost')
  post.innerHTML += `<div id="post" class="post">
  <div id="image" class="image">
  <img src="${database.urlimage}">
  </div>
  <div id="container" class="container">
  <div id="nameanddate" class="nameanddate">
  ${database.name} | ${database.date}
  </div>
  <div id="title" class="title">
  <h2>${database.title}</h2>
  </div>
  <div id="text" class="text">
  <p>${database.text}</p>
  </div>
  </div>
  </div>
  `
}

// Editing
const editbutton = document.getElementById('editbutton')
editbutton.addEventListener('click', () => {
  url = './edit.html'
  window.open(url, '_self')
})

// New
const newbutton = document.getElementById('newbutton')
newbutton.addEventListener('click', addOtherPost)

// Deleting
const choiceDelete = document.getElementById('choice-delete')
const choiceKeep = document.getElementById('choice-keep')
const deletebutton = document.getElementById('deletebutton')

const deletepost = () => {
  const database = getLocalStorage('database')
  const index = getLocalStorage('index')
  database.splice(index, 1)
  setLocalStorage('database', database)
  url = 'home.html'
  window.open(url, '_self')
}

const openmodal = () => {
  let modal = document.getElementById('modal-delete')
  modal.classList.add('openmodal')
  let contentpost = document.getElementById('contentpost')
  contentpost.classList.add('active')
}
const closemodal = () => {
  let modal = document.getElementById('modal-delete')
  modal.classList.remove('openmodal')
  let contentpost = document.getElementById('contentpost')
  contentpost.classList.remove('active')
}

// Listeners
deletebutton.addEventListener('click', openmodal)
choiceKeep.addEventListener('click', closemodal)
choiceDelete.addEventListener('click', deletepost)
document.addEventListener('DOMContentLoaded', openPostStorage)
document.getElementById('modalClose').addEventListener('click', closeModal)
