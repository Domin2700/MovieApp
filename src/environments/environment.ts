// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import { HttpHeaders, HttpParams } from "@angular/common/http";

// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  url : 'https://api.themoviedb.org/3',
  urlPoster : 'https://image.tmdb.org/t/p/w500',
  // api_key: '1ce2138e73873cedd61a4795032e9f92',
  params:  new HttpParams()
  .set('api_key', '1ce2138e73873cedd61a4795032e9f92')
  .set('session_id', 'e3fa4bd501eedb61db6e8aabe35eac1f7f4c72bf' ),
  // .set('language', 'en-US' )
  // .set('sort_by', 'created_at.asc' )
  // .set('page', '1' ),
  headers: new HttpHeaders({ //Preparo la cabezera con su jwt
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJzdWIiOiI2MDAxMTJhNjMyNmMxOTAwM2Q4MTJmZjIiLCJuYmYiOjE2MTA3MzYwODksImF1ZCI6IjFjZTIxMzhlNzM4NzNjZWRkNjFhNDc5NTAzMmU5ZjkyIiwianRpIjoiMjczMDM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdfQ.e4__WdFnYoZNCL4gre8sInpCGHHDF37pOUKrM1yW-NE'
    
  }),
  account_id : '600112a6326c19003d812ff2'

}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
