const numItemsToGenerate = 1;

function renderItem() {
  fetch(`https://source.unsplash.com/678x1080/?aurora`).then(response => {
    let item = document.getElementById("image");
    item.innerHTML = `
      <img src="${response.url}" alt="Image from unsplash" class="w-full h-full"/>
    `;
    // document.body.appendChild(item);
  });
}
renderItem();
