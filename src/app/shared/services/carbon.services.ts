import { Injectable } from "@angular/core";

import { 
    IconService 
} from 'carbon-components-angular';

@Injectable({
    providedIn: 'root'
})
export class CarbonService {
    constructor(private carbon: IconService) {

    }
}