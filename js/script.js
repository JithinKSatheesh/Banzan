const elementNode = document.getElementById('type-text')
const elementNode2 = document.getElementById('type-text2')
let text = ''
let text2 = ''

function updateNode () {
  elementNode.innerHTML = text

}
function updateNode2 () {
  elementNode2.innerHTML = text2
  
}
// =================

function pushCharacter (character) {
  text += character
  updateNode()
}

function pushCharacter2 (character) {
  text2 += character
  updateNode2()
}
// =================

function popCharacter () {
  text = text.slice(0, text.length -1)
  updateNode()
}

function popCharacter2 () {
  text2 = text2.slice(0, text2.length -1)
  updateNode2()
}

// =================
function clearText () {
  text = ''
  updateNode()
}

function clearText2 () {
  text2 = ''
  updateNode2()
}

// =================

function wait (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

// =================
function typeCharacter (character) {
  return new Promise(resolve => {
    const randomMsInterval = 100 * Math.random()
    const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval
    
    pushCharacter(character)
    wait(msInterval).then(resolve)
  })
}

function typeCharacter2 (character) {
  return new Promise(resolve => {
    const randomMsInterval = 100 * Math.random()
    const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval
    
    pushCharacter2(character)
    wait(msInterval).then(resolve)
  })
}
// =================

function removeCharacter () {
  return new Promise(resolve => {
    const randomMsInterval = 100 * Math.random()
    const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval
    
    popCharacter()
    wait(msInterval).then(resolve)
  })
}

function removeCharacter2 () {
  return new Promise(resolve => {
    const randomMsInterval = 100 * Math.random()
    const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval
    
    popCharacter2()
    wait(msInterval).then(resolve)
  })
}
// =================

function typeText (text) {
  return new Promise(resolve => {
    function _type (index) {
      typeCharacter(text[index]).then(() => {
        if (index + 1 < text.length) _type(index + 1)
        else resolve()
      })
    }
    _type(0)
  })
}

function typeText2 (text) {
  return new Promise(resolve => {
    function _type (index) {
      typeCharacter2(text[index]).then(() => {
        if (index + 1 < text.length) _type(index + 1)
        else resolve()
      })
    }
    _type(0)
  })
}
// =================

function removeText (amount) {
  return new Promise(resolve => {
    function _remove (index) {
      removeCharacter().then(() => {
        if (index + 1 < amount) _remove(index + 1)
        else resolve()
      })
    }
    _remove(0)
  })
}

function removeText2 (amount) {
  return new Promise(resolve => {
    function _remove (index) {
      removeCharacter2().then(() => {
        if (index + 1 < amount) _remove(index + 1)
        else resolve()
      })
    }
    _remove(0)
  })
}

// =================
// Typing script ⌨

var text_name = 'We make....'
var text_name2 = 'Awesome Games'
var text_love = 'We make....'
var text_love2 = 'Valuable Apps'
var text_travel ='We gamify....'
var text_travel2 ='Customer Journeys'
var text_photo ='We create....'
var text_photo2 ='Long term Customer Engagement'
var text_study ='We tell....'
var text_study2 ='Digital Stories'

function typeLoop() {
  typeText(' ') 
    .then(() => typeText(text_name))
    .then(() => typeText2(text_name2))
    .then(() => wait(2000))
    .then(()=> removeText2(text_name2.length))
    .then(()=> removeText(text_name.length))
    .then(()=> typeText(text_love))
    .then(()=> typeText2(text_love2))
    .then(() => wait(2000))
    .then(() => removeText2(text_love2.length))
    .then(() => removeText(text_love.length))
    .then(()=> typeText(text_travel))
    .then(()=> typeText2(text_travel2))
    .then(() => wait(2000))
    .then(() => removeText2(text_travel2.length))
    .then(() => removeText(text_travel.length))
    .then(()=> typeText(text_photo))
    .then(()=> typeText2(text_photo2))
    .then(() => wait(2000))
    .then(() => removeText2(text_photo2.length))
    .then(() => removeText(text_photo.length))
    .then(()=> typeText(text_study))
    .then(()=> typeText2(text_study2))
    .then(() => wait(2000))
    .then(() => removeText2(text_study2.length))
    .then(() => removeText(text_study.length))
    .then(typeLoop)
}

wait(300).then(() => {
  clearText()
  typeText(' ')
  .then(() => wait(500))
  .then(typeLoop)
})



// ========================
// ========================
$('.smooth-goto').on('click', function() {  
  $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
  return false;
  });
  