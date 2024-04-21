import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { AUTH_FEATURE_KEY } from './auth-key';

// Lookup the 'Auth' feature state managed by NgRx
const authState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const user = createSelector(authState, ({ user }) => user);
