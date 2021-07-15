import { viewFight } from "./fightView";
import { IFighterDetails } from "./interfaces/IFighterDetails";

export function fight(firstFighter:IFighterDetails, secondFighter:IFighterDetails){
  // return winner
  viewFight(firstFighter, secondFighter);

  const attackPeriod = 500; //need to set timer

  while(true){
    if(firstFighter.health>0){
      secondFighter.health = secondFighter.health - getDamage(firstFighter, secondFighter);
    }
    else{
      firstFighter.health = 0;
      return secondFighter;
    }
    if(secondFighter.health>0){
      firstFighter.health = firstFighter.health - getDamage(secondFighter, firstFighter);
    }
    else{
      secondFighter.health = 0;
      return firstFighter;
    }
  }
}
// function attack(attacker:IFighterDetails, enemy:IFighterDetails){
//   if(attacker.health>0){
//     enemy.health = enemy.health - getDamage(attacker, enemy);
//   }else{
//     attacker.health = 0;
//     return attacker;
//   }
// }

export function getDamage(attacker:IFighterDetails, enemy:IFighterDetails) {
  const damage = getHitPower(attacker) - getBlockPower(enemy);
  if(damage < 0)
  {
    return 0;
  }
  return damage;
  // damage = hit - block
  // return damage 
}

function getRandomIntInclusive(min:number, max:number) {
  return Math.random() * (max - min + 1) + min;
}

export function getHitPower(fighter:IFighterDetails) {
  const criticalHitChance = getRandomIntInclusive(1,2);
  const power = fighter.attack * criticalHitChance;
  return power;
  // return hit power
}

export function getBlockPower(fighter:IFighterDetails) {
  const dodgeChance = getRandomIntInclusive(1,2);
  const power = fighter.defense * dodgeChance;
  return power;
  // return block power
}
