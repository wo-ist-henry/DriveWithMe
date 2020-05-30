import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {DbService} from '../../services/db.service';

export const HomeLoadingEffect = '[Home] Loading';
export const HomeLoadedEffect = '[Home] Loaded';

@Injectable()
export class HomeEffect {

    @Effect()
    loadCarpools$ = createEffect(() =>
        this.actions$.pipe(
            ofType(HomeLoadingEffect),
            map(_ => {
                return {type: HomeLoadedEffect, payload: this.db.getCarpools()};
            }))
    );

    constructor(private actions$: Actions, private db: DbService) {
    }
}
