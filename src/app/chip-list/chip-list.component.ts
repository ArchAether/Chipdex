import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Chip } from '../chip';
import { ChipService } from '../chip.service';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent implements OnInit {
  
  searchText;
  chips: Chip[] = [];

  selectedChip: Chip;
  defaultChip: Chip = {
    id: 0,
    name: "Select a Chip on the right",
    description: "No chip selected",
    element: "",
    class: "",
    damage: 0,
    chipCode: [""],
    megabytes: 0,
    image: "../assets/Images/BattleChips/NoData.png",
  }
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  
  constructor(private chipService: ChipService) { }

  ngOnInit(): void {
    this.selectedChip = this.defaultChip;
    this.getChips();

  }

  onSelect(chip: Chip): void {
    this.selectedChip = chip;
  }
  getChips(): void {
    this.chipService.getChips()
      .subscribe(chips => this.chips = chips);
  }

}
