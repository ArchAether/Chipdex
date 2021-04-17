import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Chip } from '../chip';
import { ChipService } from '../chip.service';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent implements OnInit {
  
  searchText;
  chips: Chip[];
  loadedData = false;

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
  
  constructor(private chipService: ChipService, private chRef: ChangeDetectorRef) { 
    
  }
  
  ngOnInit(): void {
    this.selectedChip = this.defaultChip;
    this.chipService.getChips()
      .subscribe(chips => this.chips = chips,
        error => console.log("Failure"),
        () => {console.log("Completed!"), this.loadedData = true, 
        this.chRef.detectChanges()});
  }

  onSelect(chip: Chip): void {
    this.selectedChip = chip;
  }

  toggleShow(): void {
    //this.loadedData = true;
  }

}
