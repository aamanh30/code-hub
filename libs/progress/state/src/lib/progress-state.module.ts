import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgressEffects } from './+state/progress.effects';
import { PROGRESS_FEATURE_KEY } from './+state/progress-key';
import { progressReducer } from './+state/progress.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PROGRESS_FEATURE_KEY, progressReducer),
    EffectsModule.forFeature([ProgressEffects]),
  ],
})
export class ProgressStateModule {}
