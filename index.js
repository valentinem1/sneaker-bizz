$(document).ready(function(){

    // creates div to hold header
    const pageHeaderContainer = document.createElement('div');
    pageHeaderContainer.className = 'page-header-container';

    // creates header
    const homePageHeader = document.createElement('h1');
    homePageHeader.className = 'page-header-title';
    homePageHeader.innerText = "Sneaker Bizz";

    // append it to the div and then append the div to the body of html
    pageHeaderContainer.appendChild(homePageHeader);
    $("body").append(pageHeaderContainer);

});