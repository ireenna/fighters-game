export function fight(firstFighter, secondFighter) {
    // return winner
    while (true) {
        if (firstFighter.health > 0) {
            secondFighter.health = secondFighter.health - getDamage(firstFighter, secondFighter);
        }
        else {
            return secondFighter;
        }
        if (secondFighter.health > 0) {
            firstFighter.health = firstFighter.health - getDamage(secondFighter, firstFighter);
        }
        else {
            return firstFighter;
        }
    }
}
export function getDamage(attacker, enemy) {
    const damage = getHitPower(attacker) - getBlockPower(enemy);
    if (damage < 0) {
        return 0;
    }
    return damage;
    // damage = hit - block
    // return damage 
}
function getRandomIntInclusive(min, max) {
    return Math.random() * (max - min + 1) + min;
}
export function getHitPower(fighter) {
    const criticalHitChance = getRandomIntInclusive(1, 2);
    const power = fighter.attack * criticalHitChance;
    return power;
    // return hit power
}
export function getBlockPower(fighter) {
    const dodgeChance = getRandomIntInclusive(1, 2);
    const power = fighter.defense * dodgeChance;
    return power;
    // return block power
}
