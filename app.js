// km to meter convert
function kmToMeters(km) {
    if (km < 0) {
        return `Your value is incorrect`;
    } else {
        return km * 1000;
    }
}

const result1 = kmToMeters(47);
console.log(`km to meters result: ${result1} m`);


// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return `Your value is incorrect`;

    }
    else {
        return (watch * 50) + (phone * 100) + (laptop * 300);
    }
}

const result2 = budgetCalculator(2, 1, 1);
console.log(`Total Cost: $${result2}`);


// hotel cost 
/**
 * For the first 10 days, the hotel costs $100 per days
 * For the second 10 days, the hotel costs $80 per days. 20% commission
 * For the third part 20 days to infinity, the hotel costs $50 per days, 50% commission
 */
function hotelCost(days) {
    let cost = 0;
    if (days <= 0) {
        return `Your value is incorrect`;
    }
    else {
        if (days <= 10) {
            cost = days * 100;
        }
        else if (days <= 20) {
            let firstPart = 10 * 100;
            let remaining = days - 10;
            let secondPart = remaining * 80;

            cost = firstPart + secondPart;
        }
        else if (days > 20) {
            let firstPart = 10 * 100;
            let secondPart = 10 * 80;
            let remaining = days - 20;
            let thirdPart = remaining * 50;

            cost = firstPart + secondPart + thirdPart;
        }
    }
    return cost;
}

const result3 = hotelCost(47);
console.log(`Hotel Cost: $${result3}`);


// array big names
const friendsNames = ['Muhammad', 'Al-amin', 'Imran', 'Mucha', 'Jabbar', 'Tanvir'];

function megaFriend(arr) {
    let lgth = 0;
    let longest;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longest = arr[i];
        }

    }
    return longest;
}

const result4 = megaFriend(friendsNames);
console.log(result4);
