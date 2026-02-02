const containerEl = document.querySelector('.container')
const columns = 16
const rows = 16

function makeGrid(rows, columns) {
  for (let i = 0; i < columns; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('row-div')
    containerEl.appendChild(rowDiv)
    for (let j = 0; j < rows; j++) {
      let div = document.createElement('div')
      div.classList.add('square')
      rowDiv.appendChild(div)
      console.log('square made')
    }
  }
}

console.log('making grid...')
makeGrid(rows, columns)