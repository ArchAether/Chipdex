# Chipdex
---
Chipdex is a front-end application made in Angular that consumes my [Battlechip-server API](https://github.com/ArchAether/Battlechip-Server) to allow users to search for "Battle chips" from Capcom's [Mega Man Battle Network 6](https://en.wikipedia.org/wiki/Mega_Man_Battle_Network_6). All chips and their related information/images is copywrited by Capcom.

# Components
---
### chip-detail
- The chip-detail component displays information about the selected chip to the user
- Gets the chip data via the `@Input()` decorator, and must be passed from the HTML code that renders it: `<app-chip-detail [chip]="selectedChip"></app-chip-detail>`

### chip-list
- The chip-list component is a view that allows the user to search for chips using Angular's ngModel module and ngFor module
- Requires the chip-detail component


# Services
---
### chip.service
- Chipdex currently uses one service, the chip service, to obtain information about the chips.
- The chip service makes a HTTP request to the [Battlechip-server API](https://github.com/ArchAether/Battlechip-Server) to get an array of Chips containing data of all available chips

# Links
---
[Back to the Home page](https://archaether.github.io/)
