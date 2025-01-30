const myList = document.getElementById('card-to-print');

const count = 8;

for (let i = 0; i < count; ++i) {
  const myListCopy = myList.cloneNode(true);
  myList.parentNode.append(myListCopy);
}