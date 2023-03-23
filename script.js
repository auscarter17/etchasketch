let containerEl = document.getElementById('container');

let gridCount = 16;

for (j = 0; j < gridCount; j++){
  for (i = 0; i < gridCount; i++) {
    const squares = document.createElement('div');
    squares.className = 'gridSquare';
    containerEl.appendChild(squares);
    console.log('one squary boi');
    squares.style.width = "100%";
      let height = (960 - (gridCount * 2)) / gridCount;
      squares.style.height = `${height}px`;
      squares.style.width = `${height}px`;
  }
}


let squares = document.querySelectorAll('.gridSquare');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    console.log('drawn');
    square.classList.add('drawn');
  })
})