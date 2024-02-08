const secondsHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hoursHand = document.querySelector(".hand.hours");

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
    const currentDate = new Date();

    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;

    setRotation(secondsHand, seconds);
    setRotation(minutesHand, minutes);
    setRotation(hoursHand, hours);
};

setClock();
setInterval(setClock, 1000);