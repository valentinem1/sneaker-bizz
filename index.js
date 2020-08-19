$(document).ready(function(){
        // fetches sneakers from external API
    fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=100')
    .then(r => r.json())
    .then(data => {
        // call the function to display each sneaker onto the DOM.
        displaySneakersOnDOM(data.results)
    })
    .catch(err => console.log(err))
    
    function displaySneakersOnDOM(sneakerData) {
        // // creates a div wrapper for all the sneakers.
        const divWrapper = document.createElement('div');
        divWrapper.className = 'div-wrapper';
        $('body').append(divWrapper);
    
        // iterates over each sneaker to create dom elements for it to display it.
        sneakerData.forEach(sneaker => {
            if(sneaker.year < 2021){
                // creates sneaker card div.
                const sneakerCard = document.createElement('div');
                sneakerCard.classList.add('card', 'sneaker-card');
                sneakerCard.addEventListener("click", (evt) => {
                    console.log(evt.target);
                });
                // creates sneaker header card div.
                const sneakerCardHeader = document.createElement('div');
                sneakerCardHeader.className = 'sneaker-card-header';
        
                // creates sneaker header.
                const sneakerHeader = document.createElement('h2');
                sneakerHeader.className = 'sneaker-header';
                // sneakerHeader.innerText = `${sneaker.brand}, ${sneaker.name}`
                sneakerHeader.innerText = sneaker.title;
    
                // creates image element for sneaker card.
                const sneakerImgDiv = document.createElement('div');
                sneakerImgDiv.className = 'card-image';
                const sneakerImage = document.createElement('img');
                sneakerImage.className = 'sneaker-image';
                sneakerImage.src = sneaker.media.thumbUrl;
                sneakerImage.alt = sneaker.name;

                // append h2 to sneakerCardHeader div.
                sneakerCardHeader.append(sneakerHeader);
                // append image to its div.
                sneakerImgDiv.append(sneakerImage);
                // append sneakerCard Header div to the SneakerCard div.
                sneakerCard.append(sneakerCardHeader, sneakerImgDiv);
                // append SneakerCard div to the div wrapper.
                divWrapper.append(sneakerCard);
            }
        });
    }
});