const hol_btn = document.querySelector('#hol_btn');
const hol_picked = document.querySelector('#hol_picked');

  hol_btn.onclick = (event) => {
      document.getElementById("hol_btn").disabled = true;
      event.preventDefault();
      console.log(hol_picked.value);
      getholCountry(hol_picked.value); //holiday type picked from dropdown to pass to getHolidayCountry Function to display relevant countres and short info on them

      //need a function here to remove old maps that were there on last choice

  };

  hol_btn.onchange = () => {

      alert("changing event!!!");
  }

  function enablebutton(){
      document.getElementById("hol_btn").disabled = false;
      var map_div = document.getElementById("hol_display"); //above link worked fix the map div to be visible
      var displayState = getComputedStyle(map_div).display;
      console.log("changing HolidayType 1st holiday element is visible? " + displayState);

      var country_1 = document.getElementById("country1");
      var country_2 = document.getElementById("country2");
      var country_3 = document.getElementById("country3");
      var country_4 = document.getElementById("country4");
      var country_5 = document.getElementById("country5");

      var div_loc_pic1 = document.getElementById("loc_pic1");
      var div_loc_info1 = document.getElementById("loc_info1");
      var div_radio_dot1 = document.getElementById("radio_dot1");
      var div_label1 = document.getElementById("label_map1");

      var div_map1 =  document.getElementById("map1");

      var div_loc_pic2 = document.getElementById("loc_pic2");
      var div_loc_info2 = document.getElementById("loc_info2");
      var div_radio_dot2 = document.getElementById("radio_dot2");
      var div_label2 = document.getElementById("label_map2");

      var div_map2 =  document.getElementById("map2");

      var div_loc_pic3 = document.getElementById("loc_pic3");
      var div_loc_info3 = document.getElementById("loc_info3");
      var div_radio_dot3 = document.getElementById("radio_dot3");
      var div_label3 = document.getElementById("label_map3");

      var div_map3 =  document.getElementById("map3");

      var div_loc_pic4 = document.getElementById("loc_pic4");
      var div_loc_info4 = document.getElementById("loc_info4");
      var div_radio_dot4 = document.getElementById("radio_dot4");
      var div_label4 = document.getElementById("label_map4");

      var div_map4 =  document.getElementById("map4");

      var div_loc_pic5 = document.getElementById("loc_pic5");
      var div_loc_info5 = document.getElementById("loc_info5");
      var div_radio_dot5 = document.getElementById("radio_dot5");
      var div_label5 = document.getElementById("label_map5");

      var div_map5 =  document.getElementById("map5");



      country_1.removeChild(div_loc_pic1);
      country_1.removeChild(div_loc_info1);
      country_1.removeChild(div_radio_dot1);
      country_1.removeChild(div_label1);
      //country_1.removeChild(mbl_div_map1);

      country_2.removeChild(div_loc_pic2);
      country_2.removeChild(div_loc_info2);
      country_2.removeChild(div_radio_dot2);
      country_2.removeChild(div_label2);

      country_3.removeChild(div_loc_pic3);
      country_3.removeChild(div_loc_info3);
      country_3.removeChild(div_radio_dot3);
      country_3.removeChild(div_label3);

      country_4.removeChild(div_loc_pic4);
      country_4.removeChild(div_loc_info4);
      country_4.removeChild(div_radio_dot4);
      country_4.removeChild(div_label4);

      country_5.removeChild(div_loc_pic5);
      country_5.removeChild(div_loc_info5);
      country_5.removeChild(div_radio_dot5);
      country_5.removeChild(div_label5);

      if (displayState == "flex") {
                  map_div.style.display = "none";
                //  map_div.style.height= "0px";
              //    map_div.style.width= "0px";
                  alert("current hol_display element is in the display state is " + displayState + " will need to remove or blank out old generated maps");

                  if (map_div.children.length > 0){
                     map_children = map_div.children;
                     alert("has child elements: " + map_div.children.length);
                     for (let i = 0; i < map_children.length; i++) {
                        //if (map_children[i] === 'object HTMLDivElement'){

                        if (map_children[i].style.display){
                         //country_num = i - 2;
                         alert("found a element index " + i + " with style on it: " + map_children[i].style.display + " " + map_children[i].id + " country" + map_children[i].id.slice(-1));
                         //console.log(map_div.children[i].style.display);
                         country_id = "country" + map_children[i].id.slice(-1);
                         //map_div.removeChild(map_children[i].id);
                         map_children[i].style.display = "none";
                         country_id.removeChild(map_children[i].id);
                        }
                     }
                  }
                  /*if (map_div.contains(div_map1)){
                        country_1.removeChild(div_map1);
                  }else if (map_div.contains(div_map2)){
                        country_2.removeChild(div_map2);
                  }else if (map_div.contains(div_map3)){
                        country_3.removeChild(div_map3);
                  }else if (map_div.contains(div_map4)){
                        country_4.removeChild(div_map4);
                  }else if (map_div.contains(div_map5)){
                        country_5.removeChild(div_map5);
                  } //Not working!!
                  //https://www.geeksforgeeks.org/how-to-check-if-an-element-has-any-children-in-javascript/
                  //https://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-contained-within-another


                  //child = document.querySelector('.child');
                 */
                //  alert("old maps removed!!");



      }


  }
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
    ],

    //Southern-Spain, Portugal, Southern_France, Southern_Italy, Croatia, Greece
    //
     "Southern_Spain": [
         {
           "coords": { "lat": "36.7212","lng":"4.4217"},
           "content": "South Spain",
           "Hol_type": "beach", //In latter version this will need to be an array to cover the other holiday types for Switzerland
           "info": "South Spain has many resorts for budget holidays", //will need to be an array - Need different info each holiday type
           "airlines": ["Aer Lingus","Iberia","RyanAir"],
           "pic" : "assets/images/southern_spain.jpg"  //will need to be an array
         }

     ],
     //38.7223° N, 9.1393° W
     "Portugal": [

         {
           "coords": { "lat": "38.7223","lng":"9.1393"},
           "content": "Portugal",
           "Hol_type": "beach", //In latter version this will need to be an array to cover the other holiday types for Switzerland
           "info": "Portual has many resorts along its beautiful coast near the famous city Lisbon", //will need to be an array - Need different info each holiday type
           "airlines": ["Aer Lingus","Tap Air","British Airways"],
           "pic" : "assets/images/portugal.jpg"  //will need to be an array
         }

     ],
     //43.7102° N, 7.2620° E
     "Southern_France": [

         {
           "coords": { "lat": "43.7102","lng":"7.2620"},
           "content": "Southern France",
           "Hol_type": "beach", //In latter version this will need to be an array to cover the other holiday types for Switzerland
           "info": "Southern France has many exclusive resorts for the refined traveler in Nice, Caan and Monaco", //will need to be an array - Need different info each holiday type
           "airlines": ["Aer Lingus","Air France","British Airways"],
           "pic" : "assets/images/southern_france.jpg"  //will need to be an array
         }

     ],
     //40.8518° N, 14.2681
     "Southern_Italy": [

         {
           "coords": { "lat": "40.8518","lng":"14.2681"},
           "content": "Southern Italy",
           "Hol_type": "beach", //In latter version this will need to be an array to cover the other holiday types for Switzerland
           "info": "Southern Italy has many resorts along the Amalfi coast south of Naples", //will need to be an array - Need different info each holiday type
           "airlines": ["Aer Lingus","Air Italia","British Airways"],
           "pic" : "assets/images/southern_italy.jpg"  //will need to be an array
         }

     ],
     //42.6507° N, 18.0944
     "Croatia": [

         {
           "coords": { "lat": "42.6507","lng":"18.0944"},
           "content": "Croata",
           "Hol_type": "beach", //In latter version this will need to be an array to cover the other holiday types for Switzerland
           "info": "Croatia has many resorts along its beautiful coast near famous castle city of Debrovnic", //will need to be an array - Need different info each holiday type
           "airlines": ["Aer Lingus","RyanAir","British Airways"],
           "pic" : "assets/images/croatia.jpg"  //will need to be an array
         }

     ],
     //37.9838° N, 23.7275° E
     "Greece": [

         {
           "coords": { "lat": "37.9838","lng":"23.7275"},
           "content": "Greece",
           "Hol_type": "beach", //In latter version this will need to be an array to cover the other holiday types for Switzerland
           "info": "Greece has many beautiful Islands with beautiful beaches and coves", //will need to be an array - Need different info each holiday type
           "airlines": ["Aer Lingus","EasyJet","British Airways"],
           "pic" : "assets/images/greece.jpg"  //will need to be an array
         }

      ],
      //Berlin,Dublin,London,Paris,Rome
      //52.5200° N, 13.4050
      "Berlin": [
        {
          "coords": { "lat": "52.5200","lng":"13.4050"},
          "content": "Berlin",
          "Hol_type": "tour", //In latter version this will need to be an array to cover the other holiday types for Switzerland
          "info": "Berlin city capital of Germany, large city, with famous landmarks, and underground dance culture", //will need to be an array - Need different info each holiday type
          "airlines": ["Aer Lingus","Lufthansa","British Airways"],
          "pic" : "assets/images/berlin.jpg"  //will need to be an array
        }
      ],
      //53.3498° N, 6.2603
      "Dublin": [
        {
          "coords": { "lat": "53.3498","lng":"6.2603"},
          "content": "Dublin",
          "Hol_type": "tour", //In latter version this will need to be an array to cover the other holiday types for Switzerland
          "info": "Dublin city capital of Ireland, river liffey runs through it, friendy city, with famous pubs,hotels and restaurants", //will need to be an array - Need different info each holiday type
          "airlines": ["Aer Lingus","RyanAir","British Airways"],
          "pic" : "assets/images/dublin1.jpg"  //will need to be an array
        }
      ],
      //51.5074° N, 0.1278
      "London": [
        {
          "coords": { "lat": "51.5074","lng":"0.1278"},
          "content": "London",
          "Hol_type": "tour", //In latter version this will need to be an array to cover the other holiday types for Switzerland
          "info": "London city capital of England, Thames river runs through it, large city, with famous landmarks,hotels and restaurants", //will need to be an array - Need different info each holiday type
          "airlines": ["Aer Lingus","RyanAir","British Airways, EasyJet"],
          "pic" : "assets/images/london.jpg"  //will need to be an array
        }
      ],
      //48.8566° N, 2.3522
      "Paris": [
        {
          "coords": { "lat": "48.8566","lng":"2.3522"},
          "content": "Paris",
          "Hol_type": "tour", //In latter version this will need to be an array to cover the other holiday types for Switzerland
          "info": "Paris city capital of France,Saine river runs through it, large city, with famous landmarks,hotels and restaurants", //will need to be an array - Need different info each holiday type
          "airlines": ["Aer Lingus","Air France","British Airways, EasyJet"],
          "pic" : "assets/images/paris.jpg"  //will need to be an array
        }
      ],
      //41.9028° N, 12.4964°
      "Rome":  [
        {
          "coords": { "lat": "41.9028","lng":"12.4964"},
          "content": "Rome",
          "Hol_type": "tour", //In latter version this will need to be an array to cover the other holiday types for Switzerland
          "info": "Rome city capital of Italy,Tiber river runs through it, large city, with famous landmarks,hotels and restaurants", //will need to be an array - Need different info each holiday type
          "airlines": ["Aer Lingus","Air Italia","British Airways, RyanAir"],
          "pic" : "assets/images/rome.jpg"  //will need to be an array
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
    //display_country_info(hol_type);
    display_country_info(options);
  }
  if(hol_type === 'Beach'){
    options = ["Southern_Spain", "Portugal", "Southern_France", "Southern_Italy","Croatia" ,"Greece"];
    display_country_info(options);
    //  //Southern_Spain, Portugal, Southern_France, Southern_Italy, Croatia, Greece
  }
  if(hol_type === 'City'){
     options= ["Berlin","Dublin","London","Paris","Rome"];
     display_country_info(options);
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
  var opt = "";
  var el = "";
  if (btn === null){

    btn = document.createElement("button");
    btn.innerHTML = "BOOK";
    btn.onclick = function () {
      alert("You want to book a resort in " + place_info[0].name);

      select = document.getElementById("resort");
      for(var i = 0; i < place_info.length; i++) {
          opt = place_info[i].name;
          el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          select.appendChild(el);
      }
      //removeOptions(selectElement)
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
  var sel = document. getElementById('resort');
  for (i = sel. length - 1; i >= 0; i--) {
     sel. remove(i);
  }

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
function display_country_info(hol_countries){
//function display_country_info(options){
  var map_div = document.getElementById("hol_display");
  map_div.style.display = "flex";

  var spc=null;
  var tag=null;
  var text=null;

  var radioYes=null;
  var element=null;
  var lblgenerateMap=null;
  var textgenerateMap=null;
  var country_div=null;
  var country_num=0;
  var map_num=0;
  var attr_num=0;
  var element=null;
  var oImg=null;
  var check_info_populated=null;
  //for (var loc in data.country) {
  console.log("In display_country_info_function passed in hol_countries array_list: " + hol_countries);
  for (var loc in hol_countries) {
    console.log("in out for loop to go through hol_countries array using var loc which is iterating with value: " + hol_countries[loc]);
     country_num = country_num + 1;
     map_num = map_num + 1;
     attr_num= attr_num + 1;

     for (var i = 0; i < data.country[hol_countries[loc]].length; i++) {
     //for (var i = 0; i < options[loc].length; i++) {
         var loc_coords_lat =  data.country[hol_countries[loc]][i].coords.lat;
         console.log("referening " + hol_countries[loc] + "LATITUDE coordinate in the data json object which are " + loc_coords_lat);
         var loc_coords_lng = data.country[hol_countries[loc]][i].coords.lng;
         var place = data.country[hol_countries[loc]][i].content;
         console.log("referening " + hol_countries[loc] + " PLACE PICKED in the data json object which are " + place);
         var type_hol = data.country[hol_countries[loc]][i].Hol_type;
         var type_info = data.country[hol_countries[loc]][i].info;
         var type_pic = data.country[hol_countries[loc]][i].pic;
         var airlines_arr = data.country[hol_countries[loc]][i].airlines;
         console.log("in loop check out airlines array: " + airlines_arr);

         //if (place === place_picked) {
         console.log('COUNTRY : ' + place + ', latitude= ' +  loc_coords_lat + ',  longtitude = ' + loc_coords_lng + ' , ' + type_hol + ' , info: ' + type_info + ' resort pic: ' + type_pic);
         //}
         spc = document.createElement("br");
         tag = document.createElement("p");
         text = document.createTextNode("COUNTRY : " + place + "<br> latitude= " +  loc_coords_lat + "  longtitude = " + loc_coords_lng + " Holiday type: " + type_hol + " info: " + type_info);
         tag.setAttribute('id', 'loc_info' + attr_num);
         //var newRadioButton= document.createElement(input(type='radio',name='radio',value='1st'));
         radioYes = document.createElement("input");
         radioYes.setAttribute("type", "radio");
         radioYes.setAttribute("name", "mapselect");
         radioYes.setAttribute("value", place);
         radioYes.setAttribute('id', 'radio_dot' + attr_num);
         //radioYes.setAttribute("onclick", "alert('hello');"); worls!! trying with variable below
         //radioYes.setAttribute("onclick","alert_str('"+place+"');"); works calls functiom to call alert dialogue with country name
         //radioYes.setAttribute("onclick","country_coord('"+place+"','"+type_hol+"');"); works calls function to call aleart dialgue with 2 params
         //radioYes.setAttribute("onclick","country_coord2('"+place+"','"+type_hol+"','"+loc_coords_lat+"','"+loc_coords_lng+"');")
         var map_div = "map" + map_num;
         //var check_info_populated = document.getElementById(country_div);
         //var display_state1 = getComputedStyle(check_info_populated).display;
         //console.log("checking if holiday info is on the page: " + display_state1);
        // var olddata=document.getElementById(country_div).lastChild;
        // document.getElementById(country_div).removeChild(olddata);

         radioYes.setAttribute("onclick","country_map('"+type_hol+"','"+loc_coords_lat+"','"+loc_coords_lng+"','"+map_div+"','"+airlines_arr+"');");

         lblgenerateMap = document.createElement("lable");
         lblgenerateMap.setAttribute('id', 'label_map' + attr_num);


         //text.setAttribute('id', 'loc_info');
         //lblgenerateMap.setAttribute('id', 'label_map');
         //radioYes.setAttribute('id', 'radio_dot');

  //If it isn't "undefined" and it isn't "null", then it exists.
        /* if(typeof(textgenerateMap) != 'undefined' && element != null)
         {
           alert('textgenerateMap exists');
         }
         else{
            alert('textgenerateMap does not exist');
         }*/
         textgenerateMap = document.createTextNode("select to generate Map");
         //textgenerateMap.setAttribute('id', 'select_text');
         //lblgenerateMap.appendChild(textgenerateMap);
         tag.appendChild(text); //original setting test new one below
         //tag.replaceChild(text);
         country_div = "country" + country_num;
         console.log("what country_div is generated " + country_div);
         element = document.getElementById(country_div);
         oImg = document.createElement("img");

         check_info_populated = document.getElementById(country_div);
        // var display_state1 = getComputedStyle(check_info_populated).display; //this is generating error
        // console.log("checking if holiday info is on the page: " + display_state1); //this is generating error


            oImg.setAttribute('src', type_pic);
            oImg.setAttribute('alt', 'na');
            oImg.setAttribute('height', '150px');
            oImg.setAttribute('width', '150px');
            oImg.setAttribute('id', 'loc_pic' + attr_num);

            // this was the original setting
            element.appendChild(spc);
            element.appendChild(oImg);
            element.appendChild(spc);
            element.appendChild(tag);
            element.appendChild(spc);
            element.appendChild(radioYes);
            element.appendChild(lblgenerateMap);


            /*Trying the following setting so the elements are repplaced/updated with new settings -didnt work
            element.replaceChild(spc);
            element.replaceChildChild(oImg);
            element.replaceChild(spc);
            element.replaceChild(tag);
            element.replaceChild(spc);
            element.replaceChild(radioYes);
            element.replaceChild(lblgenerateMap);*/

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
