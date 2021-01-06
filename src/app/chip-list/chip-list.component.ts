import { Component, OnInit } from '@angular/core';
import { Chip } from '../chip';
import { CHIPS } from '../mock-chip-list';
import chipCatalogue from '../chipCatalogue.json';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {
  
  chips = chipCatalogue; //Json file
  //chips = CHIPS;
  selectedChip: Chip;
  defaultChip: Chip = {
    id: 0,
    name: "Select a Chip on the right",
    description: "\n",
    element: "???",
    class: "???",
    damage: 0,
    chipCode: ["?"],
    megabytes: 0,
    image: "../assets/Images/BattleChips/NoData.png",
  }
  
  constructor() { }

  ngOnInit(): void {
    this.selectedChip = this.defaultChip;
  }
  onSelect(chip: Chip): void {
    this.selectedChip = chip;
  }

}
