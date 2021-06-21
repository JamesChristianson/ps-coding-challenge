import {Component} from "@angular/core";
import { ICellRendererParams } from "ag-grid-community";

@Component({
   selector: 'flag-renderer',
   styleUrls: ['../countries.component.scss'],
   template: `<img class="country-flag-img" [src]="flagSrc" [alt]="altFlag"/>`
})
export class FlagRendererComponent {
   flagSrc: string;
   altFlag: string;

   agInit(params: ICellRendererParams): void {
       this.flagSrc = params.data.flag;
       this.altFlag = params.data.name;
   }
}