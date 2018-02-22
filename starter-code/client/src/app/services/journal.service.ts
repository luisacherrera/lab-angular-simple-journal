import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class JournalService {

  API_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getJournal(): Promise<any>  {
    return this.http.get(`${this.API_URL}/api/journal-entries`)
    .toPromise()
    .then((res: Response) => res.json())
  }

  getSingleJournal(id): Promise<any>  {
    return this.http.get(`${this.API_URL}/api/journal-entries/${id}`)
    .toPromise()
    .then((res: Response) => res.json())
  }

}
