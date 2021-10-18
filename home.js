const introDiv = document.querySelector('.intro')
console.log(introDiv);
introDiv.addEventListener('mouseover', (e) => {
  introDiv.style = 'font-size: 20px';
  introDiv.addEventListener('mouseout', (e) => {
    introDiv.style = '';
  })

})  