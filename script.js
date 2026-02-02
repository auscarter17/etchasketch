const containerEl = document.querySelector('.container')
let columns = 16
let rows = 16

const resizeButton = document.querySelector('.resize-button')

function makeGrid(rows, columns) {
  for (let i = 0; i < columns; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('row-div')
    containerEl.appendChild(rowDiv)
    for (let j = 0; j < rows; j++) {
      let div = document.createElement('div')
      div.classList.add('square')
      rowDiv.appendChild(div)
    }
  }
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    square.addEventListener('mouseover', (event) => {
      square.classList.add('filled')
    })
  })
}

makeGrid(rows, columns)

function resizeGrid() {
  squaresPerSide = prompt("How many squares per side?")
  if (squaresPerSide > 100 || squaresPerSide < 2) {
    alert("Number must be between 2 and 100.")
    resizeGrid()
  } else if (isNaN(squaresPerSide)) {
    alert("You must enter a number.")
    resizeGrid()
  } else {
    containerEl.innerHTML = ''
    makeGrid(squaresPerSide, squaresPerSide)
  }
}

resizeButton.addEventListener('click', function() {
  resizeGrid()
})

