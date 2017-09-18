import { Component } from '@angular/core';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TapGame } from "./game";

platformBrowserDynamic().bootstrapModule(TapGame);
