import { Component } from '@angular/core';

interface Iextentions {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  imageUrl: string;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  extensions: Iextentions[] = [
    {
      id: 1,
      title: 'DevLens',
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      isActive: false,
      imageUrl: 'assets/card_images/devlens_icon.png',
    },
    {
      id: 2,
      title: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      isActive: false,
      imageUrl: 'assets/card_images/styleSpy.png',
    },
    {
      id: 3,
      title: 'SpeedBoost',
      description:
        'Optimizes browser resource usage to accelerate page loading.',
      isActive: false,
      imageUrl: 'assets/card_images/speedBoost.png',
    },
    {
      id: 4,
      title: 'JSONWizard',
      description:
        'Formats, validates, and prettifies JSON responses in-browser.',
      isActive: false,
      imageUrl: 'assets/card_images/jsonWizard.png',
    },
    {
      id: 5,
      title: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      isActive: false,
      imageUrl: 'assets/card_images/tabMasterPro.png',
    },
    {
      id: 6,
      title: 'ViewportBuddy',
      description:
        'Simulates various screen resolutions directly within the browser.',
      isActive: false,
      imageUrl: 'assets/card_images/viewPortBuddy.png',
    },
    {
      id: 7,
      title: 'Markup Notes',
      description:
        'Enables annotation and notes directly onto webpages for collaborative debugging.',
      isActive: false,
      imageUrl: 'assets/card_images/markupNotes.png',
    },
    {
      id: 8,
      title: 'GridGuides',
      description:
        'Overlay customizable grids and alignment guides on any webpage.',
      isActive: false,
      imageUrl: 'assets/card_images/gridGuides.png',
    },
    {
      id: 9,
      title: 'Palette Picker',
      description: 'Instantly extracts color palettes from any webpage.',
      isActive: false,
      imageUrl: 'assets/card_images/palettePicker.png',
    },
    {
      id: 10,
      title: 'LinkChecker',
      description: 'Scans and highlights broken links on any page.',
      isActive: false,
      imageUrl: 'assets/card_images/linkChecker.png',
    },
    {
      id: 11,
      title: 'DOM Snapshot',
      description: 'Capture and export DOM structures quickly.',
      isActive: false,
      imageUrl: 'assets/card_images/domSnapchat.png',
    },
    {
      id: 12,
      title: 'ConsolePlus',
      description:
        'Enhanced developer console with advanced filtering and logging.',
      isActive: false,
      imageUrl: 'assets/card_images/consolePlus.png',
    },
  ];
}
