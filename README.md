# AngularMarvelHeros

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installing modules

Run `npm install` if you have just cloned from github.

## Marvel Developer Key

Replace the string `__YOUR_API_KEY__` with your Marvel Developer API key in `app.module.ts`.
You will also need to add your IP address into ['Your authorized referrers'](https://developer.marvel.com/account) in My Developer Account. Otherwise you will get a `401`. Seems like the Marvel API is meant to be called from the server.