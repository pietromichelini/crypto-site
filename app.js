
var btc = document.getElementById("bitcoin-usd");
var eth = document.getElementById("ethereum-usd");
var doge = document.getElementById("dogecoin-usd");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd%2Ceur",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {

    btc.innerHTML = response.bitcoin.usd
    eth.innerHTML = response.ethereum.usd
    doge.innerHTML = response.dogecoin.usd
});

// dropdown language menu

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})