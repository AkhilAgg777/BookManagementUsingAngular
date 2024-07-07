import { Injectable } from '@angular/core';
import { Observable,of,throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book:Book):Observable<Book>{
    //for testing we are throwing error
    const err=new Error('Error while adding a book')
    return throwError(()=>err)
    return of(book);
  }
}
