import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'services',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/services.svg')
    );
    this.matIconRegistry.addSvgIcon(
        'stores',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/stores.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'tasks',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/tasks.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'users',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/users.svg')
      );
  }
}
