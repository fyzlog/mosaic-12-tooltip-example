import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TooltipOverviewExample} from './app/tooltip-overview-example';
import { DemoMosaicModule } from './mosaic-module';
// tslint:disable-next-line:no-import-side-effect
import './polyfills';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMosaicModule,
        ReactiveFormsModule
    ],
    entryComponents: [TooltipOverviewExample],
    declarations: [TooltipOverviewExample],
    bootstrap: [TooltipOverviewExample],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2021 Positive Technologies. All Rights Reserved.
    Use of this source code is governed by an MIT-style license. */