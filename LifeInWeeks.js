lifeInWeeks(56);

function lifeInWeeks(age) {
    const yearRemaining = 90 - age;
    const daysRemaining = 365 * yearRemaining;
    const weeksRemaining = 52 * yearRemaining;
    const monthsRemaining = 12 * yearRemaining;
}

console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks and " + monthsRemaining + " months left");