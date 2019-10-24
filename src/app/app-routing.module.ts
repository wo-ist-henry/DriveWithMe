import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'mitfahrzentrale', pathMatch: 'full'},
    {path: 'mitfahrzentrale', loadChildren: './home/home.module#HomePageModule'},
    {path: 'list', loadChildren: './list/list.module#ListPageModule'},
    {path: 'carpool/:id', loadChildren: './carpool/carpool.module#CarpoolPageModule'},
    {path: 'carpool/archiv/:id', loadChildren: './carpool/archiv/archiv.module#ArchivPageModule'},
    {path: 'export', loadChildren: './export/export.module#ExportPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})

    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
