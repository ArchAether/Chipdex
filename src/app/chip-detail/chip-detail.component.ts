import { Component, OnInit } from '@angular/core';
import { Chip } from '../chip';

@Component({
  selector: 'app-chip-detail',
  templateUrl: './chip-detail.component.html',
  styleUrls: ['./chip-detail.component.css']
})
export class ChipDetailComponent implements OnInit {

  chip: Chip = {
    id: 0,
    name: "Cannon",
    description: "Cannon attack to 1 enemy",
    type: "Non-Elemental",
    damage: 40,
    chipCode1: "A",
    chipCode2: "B",
    chipCode3: "C",
    chipCode4: "*",
    image: "../assets/img/MMBN 6 Cannon.png",
  }

  constructor() { }

  ngOnInit(): void {
  }

}