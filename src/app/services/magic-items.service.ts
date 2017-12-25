import { Injectable } from '@angular/core';
import { MagicItem } from '../model/magic-item';

@Injectable()
export class MagicItemsService {

  getMagicItems(): MagicItem[] {
    return [
      new MagicItem("Arme magique", "Lorem", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", "1", "common", "MdJ1"),
      new MagicItem("Arme de feu", "Lorem feu", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", "2", "common", "MdJ2"),
      new MagicItem("Arme de froid", "Lorem glace", "jet d'Attaque et jet de dégâts", "propriete", "pouvoir", "+1D6 par bonus d'altération", "3", "common", "MdJ3")
    ]
  }
}
