import { Component, OnInit } from '@angular/core';
import { Chip } from '../chip';
import { CHIPS } from '../mock-chip-list';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {
  
  chips = CHIPS;
  selectedChip: Chip;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(chip: Chip): void {
    this.selectedChip = chip;
  }

}
