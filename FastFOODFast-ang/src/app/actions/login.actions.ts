import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Login Page] Login',
    props<{Username: string; Password: string}>()
);
