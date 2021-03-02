document.addEventListener('DOMContentLoaded', ()=> {
    // function addImages() {
    // fetch('https://dog.ceo/api/breeds/image/random/4')
    // .then(resp => resp.json())
    // .then(obj => obj.message.forEach(dog=>renderOneDog(dog)));
    // };

    // function renderOneDog(dog) {
    // const dogDiv = document.createElement('div');
    // dogDiv.className = "dog-image";
    // dogDiv.innerHTML = `
    // <img src="${dog}" alt='image of dog'></img>
    // `
    // document.querySelector('#dog-image-container').appendChild(dogDiv)
    // }

    // addImages();

    const breedSelect = document.querySelector('#breed-dropdown');
    breedSelect.addEventListener('change', (e)=> {
        const letter = e.target.value;
        document.querySelector('#dog-breeds').innerHTML = '';

        function addBreeds() {
            fetch('https://dog.ceo/api/breeds/list/all')
            .then(resp => resp.json())
            .then(obj => Object.keys(obj.message)
                .filter(dog=> dog[0] === letter)
                .forEach(dog=>renderBreed(dog))
            );
        };
    
        function renderBreed(dog) {
            const dogLi = document.createElement('li');
            dogLi.textContent = dog;
            dogLi.addEventListener('click', ()=>{
                dogLi.style.color = 'red';
            })
        
            
            document.querySelector('#dog-breeds').appendChild(dogLi)
        };
        addBreeds();
    });
});