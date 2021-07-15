import { IFighterDetails } from "./interfaces/IFighterDetails";

export function fight(firstFighter:IFighterDetails, secondFighter:IFighterDetails){
  // return winner
  while(true){
    if(firstFighter.health>0){
      secondFighter.health = secondFighter.health - getDamage(firstFighter, secondFighter);
    }
    else{
      return secondFighter;
    }
    if(secondFighter.health>0){
      firstFighter.health = firstFighter.health - getDamage(secondFighter, firstFighter);
    }
    else{
       return firstFighter;
    }
  }
    
}

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
