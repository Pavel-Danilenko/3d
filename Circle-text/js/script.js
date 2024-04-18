
const text = document.querySelector('.circle__text p');
text.innerHTML = text.innerText.split("").map(
   (chair, i) =>
      `<span style="transform:rotate(${i * 14}deg)">${chair}</span>`
      
).join("")