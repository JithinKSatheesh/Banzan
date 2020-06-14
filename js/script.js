const elementNode = document.getElementById('type-text')
let text = ''

function updateNode () {
  elementNode.innerHTML = text

}

function pushCharacter (character) {
  text += character
  updateNode()
}

function popCharacter () {
  text = text.slice(0, text.length -1)
  updateNode()
}

function clearText () {
  text = ''
  updateNode()
}


function wait (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

function typeCharacter (character) {
  return new Promise(resolve => {
    const randomMsInterval = 100 * Math.random()
    const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval
    
    pushCharacter(character)
    wait(msInterval).then(resolve)
  })
}

function removeCharacter () {
  return new Promise(resolve => {
    const randomMsInterval = 100 * Math.random()
    const msInterval = randomMsInterval < 50 ? 10 : randomMsInterval
    
    popCharacter()
    wait(msInterval).then(resolve)
  })
}

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


// Typing script ⌨

var text_name = 'We make….Awesome Games'
var text_love = 'We make…. Valuable Apps'
var text_travel ='We tell…. Digital Stories'
var text_photo ='We make games.'
var text_study ='We are BANZAN.'

function typeLoop() {
  typeText(' ') 
    .then(() => typeText(text_name))
    .then(() => wait(2000))
    .then(()=> removeText(text_name.length))
    .then(()=> typeText(text_love))
    .then(() => wait(2000))
    .then(() => removeText(text_love.length))
    .then(()=> typeText(text_travel))
    .then(() => wait(2000))
    .then(() => removeText(text_travel.length))
    .then(typeLoop)
}

wait(300).then(() => {
  clearText()
  typeText('Hi there!<br> ')
  .then(() => wait(500))
  .then(typeLoop)
})



// ========================
// ========================
$('.smooth-goto').on('click', function() {  
  $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
  return false;
  });
  