
function healthyModel(score) {
    let result;
    let value = (score - 21.75);
    value *= 5;
    value =  (0 - Math.abs(value));
    value += 91.25;
    result = value;
    console.log(result + " Healthymodel Check");
    return result;
};

function notHealthyModel(score) {
    let result;
    let value = score - 21.75;
    value *= 100;
    value /= 13;
    value =  (0 - Math.abs(value));
    value += 100;
    result = value;
    console.log(result + " unHealthyModel check");
    return result;
};

function checkDateAbility(penisSize, height, weight, physicalAttraction, personality) {
    
    let result = 0;
    result += (Math.sqrt(penisSize) * 10) + 45;
    
    let tempH = height;
    tempH -= 13.5;
    tempH *= 3.14159265;
    tempH /= 70;
    tempH = (Math.sin(tempH) * 50);
    tempH += 50;
    result += tempH;

    let bodyMassIndex = weight / ((height / 100) ** 2);
    
    if (bodyMassIndex < 3.5 || bodyMassIndex > 40) {
        result += 0
    } else if (bodyMassIndex >= 3.5 && bodyMassIndex < 18.5) {
        result += notHealthyModel(bodyMassIndex);
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 26) {
        result += healthyModel(bodyMassIndex);
    } else if (bodyMassIndex > 26 && bodyMassIndex <= 40 ) {
        result += notHealthyModel(bodyMassIndex);
    };

    result += (physicalAttraction * 10);
    result += (personality * 10);
    return result;

};

document.getElementById("submitButton").onclick = function() {

    let [length, height, weight, attraction, personality] = [
        document.getElementById("length").value,
        document.getElementById("height").value,
        document.getElementById("weight").value,
        document.getElementById("attractiveness").value,
        document.getElementById("personality").value,
    ];

    let percentage = checkDateAbility(length, height, weight, attraction, personality) / 5;
    document.getElementById("message").innerHTML = "Likelihood of Companionship: " + percentage + "%";

};
