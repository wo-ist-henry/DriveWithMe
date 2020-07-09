import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {DbService} from '../../services/db.service';
import {ActivatedRoute} from '@angular/router';

export const CarpoolLoadingEffect = '[Carpool] Loading';
export const CarpoolLoadedEffect = '[Carpool] Loaded';

@Injectable()
export class CarpoolEffect {

    @Effect()
    loadCarpool$ = createEffect(() => this.actions$.pipe(
        ofType(CarpoolLoadingEffect),
        map(_ => {
            const id = this.route.snapshot.paramMap.get('id');
            return {type: CarpoolLoadedEffect, payload: this.db.getCarpool(id)};
        }),
    ));

    constructor(private actions$: Actions,
                private db: DbService,
                private route: ActivatedRoute) {
    }
}
