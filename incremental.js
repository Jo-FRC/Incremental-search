var countryList = [ "Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire (Netherlands Antilles)", "Bosnia Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo, The Democratic Republic of", "Cook Islands", "Costa Rica", "Croatia", "Curacao (Netherlands Antilles)", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland (Republic of)", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kosrae Island", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macau", "Macedonia (FYROM)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Ponape", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Rota", "Russia", "Rwanda", "Saba (Netherlands Antilles)", "Saipan", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "South Africa", "South Korea", "Spain", "Sri Lanka", "St. Barthelemy", "St. Croix", "St. Eustatius (Netherlands Antilles)", "St. John", "St. Kitts and Nevis", "St. Lucia", "St. Maarten (Netherlands Antilles)", "St. Thomas", "St. Vincent and the Grenadines", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tinian", "Togo", "Tonga", "Tortola", "Trinidad and Tobago", "Truk", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Tuvalu", "US Virgin Islands", "Uganda", "Ukraine", "Union Island", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Gorda", "Wallis and Futuna", "Yap", "Yemen", "Zambia", "Zimbabwe" ];

var inputText = document.getElementById("input_field");
var searchText = [];
var arrResult = [];
var dropDownMenu = document.getElementById("dropdown_container");
var dropDownContent = document.getElementsByClassName("dropdown");



dropDownMenu.className = "hidden";

inputText.addEventListener("input", function(e){
    searchText = inputText.value;
    if (searchText === "" || inputText.value === "Search") {
        arrResult = [];
        clearDropDown();
        dropDownMenu.classList.add("hidden");
    } else {

        for (var i = 0 ; i < countryList.length ; i++) {
            if (countryList[i].indexOf(searchText) === 0) {
                arrResult.push(countryList[i]); //can use filter
                dropDownMenu.classList.remove("hidden");
            }
        }
        addToDropDown();


        document.addEventListener('keydown',function(e){
            if (e.key === "ArrowUp"){
                console.log(e.key);

                var h = document.querySelector('li.dropdown.highlight');
                if (!h) {
                    dropDownContent[3].classList.add('highlight');
                    return;
                }
                for (var i = dropDownContent.length - 1; i > 0; i--) {
                    if (dropDownContent[i].classList.contains('highlight')) {
                        if (i == 0){
                            break;
                        }
                        dropDownContent[i].classList.remove('highlight');
                        dropDownContent[i-1].classList.add('highlight');
                        break;
                    }
                }
            }
            else if (e.key === "ArrowDown") {
                console.log(e.key);

                var h = document.querySelector('li.dropdown.highlight');
                if (!h) {
                    dropDownContent[0].classList.add('highlight');
                    return;
                }
                for (var i=0; i < dropDownContent.length; i++) {
                    if (dropDownContent[i].classList.contains('highlight')) {
                        if (i == dropDownContent.length - 1){
                            break;
                        }
                        dropDownContent[i].classList.remove('highlight');
                        dropDownContent[i+1].classList.add('highlight');
                        break;
                    }
                }
            }
            else if (e.key === 'Enter'){
                console.log(e.key);
                for (var i = 0; i < dropDownContent.length; i++) {
                    if (dropDownContent[i].classList.contains('highlight')) {
                        dropDownContent[i].classList.remove('highlight');
                        inputText.value = dropDownContent[i].innerHTML;
                        dropDownMenu.classList.add ('hidden');
                    }
                }
            }
        });





    }

    arrResult = []; //Clear every type to get new result

    for (var i = 0; i < dropDownContent.length; i++) {
        dropDownContent[i].addEventListener("mousemove", function() {
            this.className = "highlight";
            this.addEventListener("click", function (){
                inputText.value = this.innerHTML;
                dropDownMenu.classList.add ('hidden');
            })

        })
    }

    for (var i = 0; i < dropDownContent.length; i++) {
        dropDownContent[i].addEventListener("mouseleave", function() {
            this.className = "dropdown";
        })
    }



});


function addToDropDown() {
    for (var j = 0; j < 4; j++) {
        var lis = document.getElementById("search_option").getElementsByTagName("li");
        if (arrResult[j] === undefined) {
            lis[j].innerHTML = "";
        } else {lis[j].innerHTML = arrResult[j];
        }

    }

}

function clearDropDown() {
    for (var j = 0; j < 4; j++) {
        var lis = document.getElementById("search_option").getElementsByTagName("li");
        lis[j].innerHTML = "";
    }
}
