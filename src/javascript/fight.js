import { changeHealthBar, viewFight } from "./fightView";
import { showWinnerModal } from "./modals/winner";
export function fight(firstFighter, secondFighter) {
    // return winner
    viewFight(firstFighter, secondFighter);
    const attackPeriod = 500; //need to set timer
    let timer = setInterval(function () {
        if (firstFighter.health > 0) {
            secondFighter.health -= getDamage(firstFighter, secondFighter);
            changeHealthBar(secondFighter.health, 'right-bar');
        }
        else {
            firstFighter.health = 0;
            showWinnerModal(secondFighter);
            clearInterval(timer);
        }
        if (secondFighter.health > 0) {
            firstFighter.health -= getDamage(secondFighter, firstFighter);
            changeHealthBar(firstFighter.health, 'left-bar');
        }
        else {
            secondFighter.health = 0;
            showWinnerModal(firstFighter);
            clearInterval(timer);
        }
    }, attackPeriod);
}
// function attack(attacker:IFighterDetails, enemy:IFighterDetails){
//   if(attacker.health>0){
//     enemy.health = enemy.health - getDamage(attacker, enemy);
//   }else{
//     attacker.health = 0;
//     return attacker;
//   }
// }
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
