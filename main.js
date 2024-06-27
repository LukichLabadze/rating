const ratingNums = document.querySelectorAll('.rating-num');
const numDisplay = document.getElementById('num');
const container = document.getElementById('container');
const thanksContainer = document.getElementById('thanks');
const submit = document.getElementById('submit')
let selectedRating = null;




ratingNums.forEach(element => {
    element.addEventListener('click', function(){
        element.style.backgroundColor = 'orange'
        numDisplay.textContent = element.textContent
        submit.addEventListener('click', function(){
            container.style.display = 'none'
        thanksContainer.style.display = 'block'
        })
        
    })
    
})


















































// ratingNums.forEach(ratingNum => {
//     ratingNum.addEventListener('click', function() {
//         selectedRating = this.textContent;
//         ratingNums.forEach(num => num.classList.remove('selected'));
//         this.classList.add('selected');
//     });
// });

// document.getElementById('submit').addEventListener('click', function() {
//     if (selectedRating) {
//         container.style.display = 'none';
//         thanksContainer.style.display = 'block';
//         numDisplay.textContent = `You selected ${selectedRating} out of 5`;
//     } else {
//         alert('Please select a rating first.');
//     }
// });