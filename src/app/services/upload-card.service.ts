import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const backUrl = "http://localhost:8000"

@Injectable({
  providedIn: 'root'
})

export class UploadCardService {
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<{image: string}> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<{image: string}>(`${backUrl}/api/image/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  create(data: {name: String, description: String, image: String, user_id:  String}): Observable<any> {
    return this.http.post<any>(`${backUrl}/api/course/`, data, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  getCards(user_id: string): Observable<Array<{name: string, description: string, image: string }>> {
    return this.http.get<Array<{name: string, description: string, image: string }>>(`${backUrl}/api/course/${user_id}`);
  }

  getOneCard(course_id: string): Observable<{name: string, description: string, image: string }> {
    return this.http.get<{name: string, description: string, image: string }>(`${backUrl}/api/course/getone/${course_id}`);
  }

  deleteCard(course_id: string) {
    return this.http.delete(`${backUrl}/api/course/delete/${course_id}`);
  }

  updateCard(course_id: string, name: string) {
    return this.http.put(`${backUrl}/api/course/update/${course_id}`, {name});
  }
}
