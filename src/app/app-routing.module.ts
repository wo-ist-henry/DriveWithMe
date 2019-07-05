import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'list', loadChildren: './list/list.module#ListPageModule'},
    {path: 'carpool/:id', loadChildren: './carpool/carpool.module#CarpoolPageModule'},
    {path: 'carpool/archiv/:id', loadChildren: './carpool/archiv/archiv.module#ArchivPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
