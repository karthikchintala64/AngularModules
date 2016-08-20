import { NgModule }      from '@angular/core';

import { ServicesComponent }  from './services.component';
import { servicesRouting } from './services.routing';

@NgModule({
  imports: [ servicesRouting ],
  declarations: [ServicesComponent],
  providers:[ ]
})
export class ServicesModule { }
