let containerEl = document.getElementById('container');

let btn = document.querySelector('.btn');

let gridCount = 16;

function removeGrid() {
  let squares = document.querySelectorAll('.gridSquare');
  squares.forEach(square => {
    square.remove();
  })
}


function generateSquares() {
  removeGrid();
  for (j = 0; j < gridCount; j++){
    for (i = 0; i < gridCount; i++) {
      var createSquares = document.createElement('div');
      createSquares.className = 'gridSquare';
      containerEl.appendChild(createSquares);
      createSquares.style.width = "100%";
        let height = (960 - (gridCount * 2)) / gridCount;
        createSquares.style.height = `${height}px`;
        createSquares.style.width = `${height}px`;
    }
  }
  let squares = document.querySelectorAll('.gridSquare')
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      console.log('drawn');
      square.classList.add('drawn');
    })
  })
}



btn.addEventListener('click', () => {
  userGrid = prompt('How many squares tall should the new grid be? (Max 100)');
  if (userGrid > 100) {
    alert('Please enter a number no greater than 100');
  } else if (isNaN(userGrid)) {
    alert('Please enter a valid number');
  } else if (userGrid < 1) {
    alert('Please enter a number greater than 0.')
  } else {
    gridCount = userGrid;
    generateSquares();
  }
})



generateSquares();