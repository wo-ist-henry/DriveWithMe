import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {DbService} from '../../services/db.service';
import {ActivatedRoute} from '@angular/router';

export const CarpoolLoadingEffect = '[Carpool] Loading';
export const CarpoolLoadedEffect = '[Carpool] Loaded';

@Injectable()
export class CarpoolEffect {

    loadCarpool$ = createEffect(() => this.actions$.pipe(
        ofType(CarpoolLoadingEffect),
        map(_ => {
            const id = this.route.snapshot.paramMap.get('id');
            const carpool = this.db.getCarpool(id);
            return {type: CarpoolLoadedEffect, payload: carpool};
        }),
    ));

    constructor(private actions$: Actions,
                private db: DbService,
                private route: ActivatedRoute) {
    }
}
