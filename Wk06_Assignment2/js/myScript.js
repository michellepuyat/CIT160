function selectFootWear(){
    //INPUT - choose weather on the list
    let weather = document.getElementById('weather').value;
    //PROCESS - use switch to select the type of foot wear
    let footWear;
    switch (weather) {
        case 'hot':
            footWear = "sandals 👡";
            break;
        case 'rain':
            footWear = "galoshes 🥾";
            break;
        case 'snow':
            footWear = "boots 👢"
            break;
        case 'unknown':
            footWear = "shoes 👞"
            break;
    }

    //OUTPUT - type of shoes to be worn
    document.getElementById('output').innerHTML = footWear;
}