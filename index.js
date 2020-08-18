$(document).ready(function(){

    // fetches sneakers from external API
    function fetchSneakers() {     
        fetch('https://api.thesneakerdatabase.com/v1/sneakers?limit=100')
        .then(r => r.json())
        .then(data => {
            // call the function to display each sneaker onto the DOM.
            displaySneakersOnDOM(data.results)
        })
        .catch(err => console.log(err))
    }
    fetchSneakers();
    
    function displaySneakersOnDOM(sneakerData) {

        // creates a div wrapper for all the sneakers.
        const divWrapper = document.createElement('div');
        divWrapper.className = 'div-wrapper';
        $('body').append(divWrapper);

        // iterates over each sneaker to create dom elements for it to display it.
        sneakerData.forEach(sneaker => {
            if(sneaker.year < 2021){
                // creates sneaker card div.
                const sneakerCard = document.createElement('div');
                sneakerCard.className = 'sneaker-card';
                
                // creates sneaker header card div.
                const sneakerCardHeader = document.createElement('div');
                sneakerCardHeader.className = 'sneaker-card-header';
        
                // creates sneaker header.
                const sneakerHeader = document.createElement('h2');
                sneakerHeader.className = 'sneaker-header';
                sneakerHeader.innerText = `${sneaker.brand}, ${sneaker.name}`
    
                // append h2 to sneakerCardHeader div.
                sneakerCardHeader.appendChild(sneakerHeader);
                // append sneakerCard Header div to the SneakerCard div.
                sneakerCard.appendChild(sneakerCardHeader);
                // append SneakerCard div to the div wrapper.
                divWrapper.appendChild(sneakerCard);
            }
        });

    }
});