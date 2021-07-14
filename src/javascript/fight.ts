import { IFighter } from "./interfaces/IFighter";

export function fight(firstFighter:IFighter, secondFighter:IFighter) {
  // return winner
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
