response = document.getElementById("responce").innerHTML

function answer(){
    document.getElementById("asked").innerHTML = document.getElementById("question").value + " ?"
    random = Math.floor(Math.random() * 10 + 1)
    response = ""
    switch(random){
        case 1:
            response = "Nah";
            break;
        case 2:
            response = "Sure buddy";
            break;
        case 3:
            response = "I don't think so";
            break;
        case 4:
            response = "101% not";
            break;
        case 5:
            response = "It might (it won't)";
            break;
        case 6:
            response = "I KNOW you aren't asking me that";
            break;
        case 7:
            response = "In your dreams buddy ol' pal";
            break;
        case 8:
            response = "IDK gimme like... 5 minutes";
            break;
        case 9:
            response = "stop shaking me"
            break;
        case 10:
            response = "Not even in the next 1,000,000 timelines"
    }   
    document.getElementById("response").innerHTML = response
}
