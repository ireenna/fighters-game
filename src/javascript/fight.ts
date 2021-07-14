import { IFighter } from "./interfaces/IFighter";
import { IFighterDetails } from "./interfaces/IFighterDetails";

export function fight(firstFighter:IFighterDetails, secondFighter:IFighterDetails) {
  // return winner
  return firstFighter;
}

export function getDamage(attacker:IFighter, enemy:IFighter) {
  // damage = hit - block
  // return damage 
}

export function getHitPower(fighter:IFighter) {
  // return hit power
}

export function getBlockPower(fighter:IFighter) {
  // return block power
}
