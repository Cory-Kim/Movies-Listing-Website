import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

const BASE_URL = 'http://api.themoviedb.org/3/discover/movie?';
const API_KEY = 'api_key=b051ce1ea4a59757dd9126b5d404bd43'; // Use v3
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = BASE_URL + API_KEY;




//change genres
//https://api.themoviedb.org/3/discover/movie?api_key=b051ce1ea4a59757dd9126b5d404bd43&with_genres=878




// // Hint: You will need a function to change this URL to
// // dynamically modify the start and end date range.
// + '&primary_release_date.gte=2019-01-01'
// + '&primary_release_date.lte=2019-02-25'

// // Hint: You will want to dynamically change the page number
// // and genre number.
// + '&page=1&with_genres=16';


// const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
//                 + API_KEY
//                 + '&language=en-US';




const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?'
  + API_KEY
  + '&language=en-US';



const CURRENT_MOVIE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
  + API_KEY
  + '&language=en-US';



@Component({
  selector: 'app-main',
  styleUrls: ['./app.component.css'],
  template: `
              <div id="box">
                <header-root></header-root><br>

                <select id="genrelist"  (change)="changeGenre($event)">
                  <option *ngFor="let genre of _genreArray" value="{{genre.id}}">{{genre.name}}</option>
                </select>
              
              
                <div id="container">
                  <div id="pContainer" *ngFor="let movie of _movieArray | paginate: {itemsPerPage: 4, currentPage: p}">
                    <img id="photo" src="{{'https://image.tmdb.org/t/p/w500' + movie.poster_path}}" alt="{{movie.title}}"> 
                    <div id="title">{{movie.title}}</div> <div id="sum">{{movie.overview}}</div>
                  </div>
                </div>
                <div id="pageNum"><pagination-controls (pageChange) = "p = $event"></pagination-controls></div>
              </div> 
            `
})


export class MainComponent
{
  _movieArray!: Array<any>;
  _genreArray!: Array<any>;
  _http: HttpClient;
  //////////////////////////////////////

  apiUrl = API_URL;
  baseUrl = BASE_URL;
  apiKey = API_KEY;
  genreUrl = GENRE_URL;
  genreName: any;
  currentDate: Date;
  currentDateMinusMonth: Date;
  today: Date;
  p: number = 1;

  // // Since we are using a provider above we can receive 
  // // an instance through an instructor.
  constructor(private http: HttpClient, private datePipe: DatePipe)
  {
    this._http = http;


    this.currentDate = new Date(Date.now());
    this.currentDateMinusMonth = this.currentDate;
    this.currentDateMinusMonth.setMonth(this.currentDate.getMonth() - 1);
    this.today = new Date(Date.now());
  }

  ngOnInit()
  {
    // this.getDateRange();
    this.getMovies();
    this.getGenres();
  }


  changeGenre(e: any)
  {
    this.genreName?.setValue(e.target.value, { onlySelf: true });
    console.log(e.target.value);
    this.apiUrl = this.baseUrl + this.apiKey + '&with_genres=' + e.target.value;
    this.getMovies();
    this.p = 1;
  }


  getFormattedDate(dt: Date)
  {
    return (this.datePipe.transform(dt, 'yyyy-MM-dd'));
  }

  getDateRange(url: string) 
  {
    url += '&primary_release_date.gte=' + this.getFormattedDate(this.currentDateMinusMonth)
      + '&primary_release_date.lte=' + this.getFormattedDate(this.today);
    return url;
  }

  getMovies()
  {
    this._http.get<any>(this.getDateRange(this.apiUrl))

      // Get data and wait for result.
      .subscribe(data =>
      {
        IMG_URL;
        API_URL;
        let page = data.page;
        let totalPages = data.total_pages;
        console.log(data);
        // "Page number: " + page
        //   + " Total Pages: " + totalPages;

        this._movieArray = data.results;
      },
        error =>
        {
          // Let user know about the error.
          alert(error);
          console.error(error);
        });
  }


  getGenres()
  {
    this._http.get<any>(GENRE_URL)
      // Get data and wait for result.
      .subscribe(data =>
      {
        this._genreArray = data.genres;
        JSON.stringify(this._genreArray);
      },

        error =>
        {
          // Let user know about the error.
          alert(error);
          console.error(error);
        });
  }




}

