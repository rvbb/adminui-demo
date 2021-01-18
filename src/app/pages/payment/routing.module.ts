import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';

const routes: Routes = [
    { path: 'internal', component: InternalComponent, pathMatch: 'full' },
    { path: 'external', component: ExternalComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class routingModule {
}
