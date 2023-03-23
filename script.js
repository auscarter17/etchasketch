let containerEl = document.getElementById('container');

let gridCount = 256;

for (i = 0; i < gridCount; i++) {
  const squares = document.createElement('div');
  squares.className = 'gridSquare';
  containerEl.appendChild(squares);
  console.log('one squary boi');
}

let squares = document.querySelectorAll('.gridSquare');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    console.log('drawn');
    square.classList.add('drawn');
  })
})