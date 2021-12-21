function greet()
{
    let occassion = document.getElementById("occ").value;
    
    switch(occassion)
    {
        case "Happy New Year":
            console.log("On the " +occassion+ " " +"we wish you Happy New year");
            break;
        case "Merry Christmas":
            console.log("On the " +occassion+ " " +"we wish you Merry Christmas");
            break;
        case "Happy Birthday":
            console.log("On the " +occassion+ " " +"we wish you Happy Birthday");
            break;
        case "Happy Anniversary":
            console.log("On the " +occassion+ " " +"we wish you Happy Anniversary");
            break;
        default:
            console.log("Your wish did not match ");
    }
}
