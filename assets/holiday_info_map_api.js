const hol_btn = document.querySelector('#hol_btn');
const hol_picked = document.querySelector('#hol_picked');

    hol_btn.onclick = (event) => {
        event.preventDefault();
        console.log(hol_picked.value);
        getholCountry(hol_picked.value); //holiday type picked from dropdown to pass to getHolidayCountry Function to display relevant countres and short info on them

    };
    var place_info = [];
    var btn=null;
    data = {
    "country" : {
      "Andorra": [
          {
            "coords": { "lat": "42.506317","lng":"1.521835"},
            "content": "Andorra",
            "Hol_type": "ski",
            "info": "Andorra is a budget skiing region for young adults.There is no direct flights from Ireland.",
            //"airlines": ["Air France","Lufthansa","RyanAir"],
            "airlines": ["Air France","Lufthansa","RyanAir"],
            "pic" : "assets/images/andorra2.jpg"
          }
       ],
        "Austria": [
         {
           "coords": { "lat": "47.5162","lng":"14.5501"},
           "content": "Austria",
           "Hol_type": "ski",
           "info": "Austria is a popular skiing region for families",
           //"airlines": ["Lauda Air","Lufthansa","RyanAir"],
           "airlines": ["Lauda Air","Lufthansa","RyanAir"],
           "pic" : "assets/images/austria1.jpg"
         }
       ],
        "France": [
         {
            "coords": { "lat": "46.2276","lng":"2.2137"},
            "content": "France",
            "Hol_type": "ski",
            "info": "France has popular skiing resorts with major town and cities within easy reach",
            //"airlines": ["Aer Lingus","Air France","RyanAir"],
            "airlines": ["Aer Lingus","Air France","RyanAir"],
            "pic" : "assets/images/france1.jpg"
        }
      ],
        "Italy": [
      //41.8719° N, 12.5674°
          {
            "coords": { "lat": "41.8719","lng":"12.5674"},
            "content": "Italy",
            "Hol_type": "ski", //In latter version this will need to be an array to cover the other holiday types for Italy
            "info": "Italy has popular skiing resorts in Northern Italy bordering France,Switzerland and Austria", //will need to be an array - Need different info each holiday type
            //"airlines": ["Aer Lingus","Air Italia","British Airways"],
            "airlines": ["Aer Lingus","Air Italia","British Airways"],
            "pic" : "assets/images/italy1.jpg"  //will need to be an array
          }
      ],
        "Switzerland": [
      //46.8182° N, 8.2275
          {
            "coords": { "lat": "46.8182","lng":"8.2275"},
            "content": "Switzerland",
            "Hol_type": "ski", //In latter version this will need to be an array to cover the other holiday types for Switzerland
            "info": "Switzerland has world famous skiing resorts, can be expensive", //will need to be an array - Need different info each holiday type
            "airlines": ["Aer Lingus","British Airways","Swiss Air"],
            "pic" : "assets/images/switzerland1.jpg"  //will need to be an array
          }
      ]
    }
  };
  /*
  This function gathers holiday type and its associated country - I have a feeling its not needed as we are just passing the it parameter
  hol_type to another function display_country_info
  */
  function getholCountry(hol_type){
    //removeOptions(document.getElementById('selectNumber'));
    var infodiv = document.getElementById('site_info'); //above link worked fix the map dive to be visible
    var div_display_state = getComputedStyle(infodiv).display;

    /*alert("trying to generate map to div map1_1 the display state is " + display_state);// shows overflow state is showing as hidden*/

    if (div_display_state == "block") {
                infodiv.style.display = "none";
                /*mapdiv.style.height= "500px";
                mapdiv.style.width= "800px";*/
                /*alert("trying to generate map to div map1_1 the display state is " + display_state);*/
    }
    console.log("in function getholCountry passed in holiday type is: " + hol_type);
    var options = [];
    var select = document.getElementById("selectNumber");

    if(hol_type === 'Skiing'){
      options = ["Andorra", "Austria", "France", "Italy","Switzerland"];
      display_country_info(hol_type);
      //display_country_info(options);
    }
    if(hol_type === 'Beach'){
      options = ["South France", "South Italy", "South Spain", "South Croatia", "Greece"];
    }
    console.log("Populate the page with: " + options);
  }
  function removeOptions(selectElement) {
     var i, L = selectElement.options.length - 1;
     for(i = L; i >= 0; i--) {
        selectElement.remove(i);
     }
  }
  /*
  This function initialize() takes in params that will be used in the google map api and google places api
  one thing that is needed is a new data value with Jason object is country_radius
  "France": [
   {
      ......
      "Hol_type": "ski",
      "country_radius": 2400000, //1000 families
    }
    then for the google maps api instead of using manual entry for radius such as: radius: 1200047,
    we could instead do: radius: country_radius,

  */
  function initialize(holtype,lat,lng,device_map,airlines_arr) {
    console.log("INITIALIZE MAP WITH COORDS " + lat + " " + lng);
    var center = new google.maps.LatLng(lat,lng)
    //  <div id="map1_1"></div>
    console.log("within map initializer function device_map is : " + device_map)
    map = new google.maps.Map(document.getElementById(device_map), {
      center: center,
      zoom: 7
    });
    var request = {
      location: center,
      radius: 1200047, //500 miles
      //type: ['skii']
      keyword: holtype
    };
    //creates the google places api object by passing in the google map object
    var service = new google.maps.places.PlacesService(map);
    //then using the google places api object calls its nearbySearch method with params request key value pairs (hol_type, radius and plot from center)
    //also includes calling a callback function
    service.nearbySearch(request,callback);


    //to make map div visible I followed this article - https://stackoverflow.com/questions/54791182/changing-the-display-of-an-element-via-javascript
    var mapdiv = document.getElementById(device_map); //above link worked fix the map div to be visible
    var display_state = getComputedStyle(mapdiv).display;

    /*alert("trying to generate map to div map1_1 the display state is " + display_state);// shows overflow state is showing as hidden*/

    //If div display is none and its its being viewed on a desktop then display it with height 500px and width 800px in center div id=map_desktop
    if (display_state == "none" && device_map == "map_desktop") {
                mapdiv.style.display = "block";
                mapdiv.style.height= "500px";
                mapdiv.style.width= "800px";
                /*alert("trying to generate map to div map1_1 the display state is " + display_state);*/
    }
    /*else If div display is none and its its being viewed on a mobile device then display it with height 300px and width 400px in
    div id=map1 or id=map2 etc - depending which country is clicked
    */
   else if (display_state == "none" && device_map != "map_desktop"){
                mapdiv.style.display = "block";
                mapdiv.style.height= "300px";
                mapdiv.style.width= "400px";
    }

    //console.log("callback assigned are you seeing result: " + place_info[0].name);

    //added this button at 19:00 4th June
    //var btn = document.createElement("button");

    if (btn === null){

      btn = document.createElement("button");
      btn.innerHTML = "BOOK";
      btn.onclick = function () {
        alert("You want to book a resort in " + place_info[0].name);
        var select = document.getElementById("resort");
        for(var i = 0; i < place_info.length; i++) {
            var opt = place_info[i].name;
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
        var airlines= document.getElementById("airlines");
        ////const myObj = JSON.parse(airlines_arr);
        console.log("LOOOK HEEERE!!!");
        console.log("1st element in Airlines array contains: " +airlines_arr.split(',')[0]);


        for(var i = 0; i < airlines_arr.length; i++) {
            var opts = airlines_arr.split(',')[i]; //got this from site - https://stackoverflow.com/questions/9133102/how-to-grab-substring-before-a-specified-character-jquery-or-javascript
            console.log('An element of Airlines array taken from jason data var: ' + opts);
            var ele = document.createElement("option");
            ele.textContent = opts;
            ele.value = opt;
            airlines.appendChild(ele);
        }
        //place_info=[];
        window.location.href='#booking_form';
      };
      var container = document.getElementById('book_button');
      container.appendChild(btn);
    }

    //end of this added code block for button
  }
  /*
  This callback function - checks the google maps places api is okay - for results of search
  map for hol_type eg skiing and the co-ords (longtitude and latitude)
  the  results object/array (which includes ski resort names) is used as a paramter to create
  map markers
  */
  function callback(results,status){
    //var place_info = [];

    if(status == google.maps.places.PlacesServiceStatus.OK){
      for (var i = 0; i < results.length; i++){
        createMarker(results[i]);
        place_info.push(results[i]);
        //return place_info[i].name;
      }
    }
    console.log("callback assigned into array index 0: " + place_info[0].name);
    //function placedetailalert (place_info[0].name); //just added now as a test
  }

  function placedetailalert(markerplace)
  {
    return markerplace;
  }
  /*
   Map Marker createMarker() function - these marker options are in the google map places api - such as .name, .vicinity and .rating
  */
  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    if(place){
      var infoWindow = new google.maps.InfoWindow({
        content: 'Name: ' + place.name + '. Address: ' + place.vicinity + '. RATING: ' + place.rating + '. Business Status: ' + place.business_status

      });
      //generatePhoto(place.photos);

    }
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
        generatePhoto(place);
       });


    function generatePhoto(place){
        console.log('resort name is: ' + place.name);
        //for (var i=0; i < place.length; i++){
           if (place.photos!=null){

             console.log(place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500}));
             //console.log(i);
             console.log(place);
            // break;
           }
        //}
     }
  }

  /*
   The function display_country_info - need to be amended to pass in country options array param instead of hol_type from function getholCountry
   then change the outer loop for (var loc in data.country) to for (var loc in country_options)
   This function extracts info from the json data object - such as co-ords(longtitude and latitude), country info, country image and airline info
   within this function another function is called:
   radioYes.setAttribute("onclick","country_map('"+type_hol+"','"+loc_coords_lat+"','"+loc_coords_lng+"','"+map_div+"','"+airlines_arr+"');");
   this passes the info here to a function which prepares a call to function which will use google map api and google places api.
   Also note map_div is also passed see the above html divs at the top of this code page - these are div id="map1", div id="map2", div id="map3"
   div id="map4", div id="map5". These are reference in this function using a counter  - initialized at the begining var map_num=0 and then incremented
   in the outloop which iterates through the countries found (map_num = map_num + 1).
   Then within the inner loop -its assigned to make up the variable (var map_div = "map" + map_num;) to be passed in the function call:
   radioYes.setAttribute("onclick","country_map('"+type_hol+"','"+loc_coords_lat+"','"+loc_coords_lng+"','"+map_div+"','"+airlines_arr+"');");
   */
  function display_country_info(hol_type){
  //function display_country_info(options){
    var country_num=0;
    var map_num=0;
    for (var loc in data.country) {
    //for (var loc in options) {
       country_num = country_num + 1;
       map_num = map_num + 1;
       for (var i = 0; i < data.country[loc].length; i++) {
       //for (var i = 0; i < options[loc].length; i++) {
           var loc_coords_lat =  data.country[loc][i].coords.lat;
           var loc_coords_lng = data.country[loc][i].coords.lng;
           var place = data.country[loc][i].content;
           var type_hol = data.country[loc][i].Hol_type;
           var type_info = data.country[loc][i].info;
           var type_pic = data.country[loc][i].pic;
           var airlines_arr = data.country[loc][i].airlines;
           console.log("in loop check out airlines array: " + airlines_arr);

           //if (place === place_picked) {
           console.log('COUNTRY : ' + place + ', latitude= ' +  loc_coords_lat + ',  longtitude = ' + loc_coords_lng + ' , ' + type_hol + ' , info: ' + type_info + ' resort pic: ' + type_pic);
           //}
           var spc = document.createElement("br");
           var tag = document.createElement("p");
           var text = document.createTextNode("COUNTRY : " + place + "<br> latitude= " +  loc_coords_lat + "  longtitude = " + loc_coords_lng + " Holiday type: " + type_hol + " info: " + type_info);
           //var newRadioButton= document.createElement(input(type='radio',name='radio',value='1st'));
           var radioYes = document.createElement("input");
           radioYes.setAttribute("type", "radio");
           radioYes.setAttribute("name", "mapselect");
           radioYes.setAttribute("value", place);
           //radioYes.setAttribute("onclick", "alert('hello');"); worls!! trying with variable below
           //radioYes.setAttribute("onclick","alert_str('"+place+"');"); works calls functiom to call alert dialogue with country name
           //radioYes.setAttribute("onclick","country_coord('"+place+"','"+type_hol+"');"); works calls function to call aleart dialgue with 2 params
           //radioYes.setAttribute("onclick","country_coord2('"+place+"','"+type_hol+"','"+loc_coords_lat+"','"+loc_coords_lng+"');")
           var map_div = "map" + map_num;
           radioYes.setAttribute("onclick","country_map('"+type_hol+"','"+loc_coords_lat+"','"+loc_coords_lng+"','"+map_div+"','"+airlines_arr+"');");

           var lblgenerateMap = document.createElement("lable");
           var textgenerateMap = document.createTextNode("select to generate Map");
           lblgenerateMap.appendChild(textgenerateMap);
           tag.appendChild(text);
           var country_div = "country" + country_num;
           var element = document.getElementById(country_div);
           var oImg = document.createElement("img");
           oImg.setAttribute('src', type_pic);
           oImg.setAttribute('alt', 'na');
           oImg.setAttribute('height', '150px');
           oImg.setAttribute('width', '150px');
           element.appendChild(spc);
           element.appendChild(oImg);
           element.appendChild(spc);
           element.appendChild(tag);
           element.appendChild(spc);
           element.appendChild(radioYes);
           element.appendChild(lblgenerateMap);
           //element.appendChild(newRadioButton);
           //https://stackoverflow.com/questions/118693/how-do-you-dynamically-create-a-radio-button-in-javascript-that-works-in-all-bro
          //https://stackoverflow.com/questions/226847/what-is-the-best-javascript-code-to-create-an-img-element
          //https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
          // https://stackoverflow.com/questions/362614/calling-onclick-on-a-radiobutton-list-using-javascript
       }
    }
    //checkRadioBtnSelected(hol_type); //not workinh here

    //https://stackoverflow.com/questions/65508623/multiple-values-in-radio-input-within-form-with-vanilla-html
    //https://w3programmings.com/pass-two-values-from-a-radio-button-when-clicked/  think of usimng this for longitude and latitude
  }
  function alert_str(place){
    alert('hello from ' + place);
  }
  function country_coord(place,holtype){
    alert('hello from ' + place + ' enjoy your ' + holtype);
  }
  function country_coord2(place,holtype,lat,lng){
    alert('hello from ' + place + ' enjoy your ' + holtype + ' on the following latitude ' + lat + ' and longtitude ' + lng);
  }
  /*
  The function country_map() below takes in a number of params that are to be used in a function call intialize() - which will generate
  map and map markers(with co-ords and hol_type and device_view (desktop or mobile - used in div placement for map to be generated on))
  In this country_map() function it checks media type - desktop or mobile in if statement and determines which div id is used eg
  div_id map_desktop or mobile which is taken from its param map_div (this was the variable which was generated based on a country values
  in the function function display_country_info() - see comments in this function)
  */
  function country_map(type_hol,selected_lat,selected_lng,map_div,airlines_arr){
    var device_view_map = "";
    let query = window.matchMedia("(min-width: 601px)");
    if (query.matches){
        //if the page is wider than 600px
        device_view_map = "map_desktop";
    }
    else {
        device_view_map = map_div;
    }
    console.log("device_view_map is: " + device_view_map);

   // this passes the info here to a function which prepares a call to function which will use google map api and google places api
    google.maps.event.addDomListener(window, "load", initialize(type_hol,selected_lat, selected_lng,device_view_map,airlines_arr));
  }

  function checkRadioBtnSelected(hol_type){
    var getSelectedValue = document.querySelector( 'input[name="mapselect"]:checked');
     if(getSelectedValue != null) {
          alert("Selected radio button values is: " + getSelectedValue.value);
    }
 }
