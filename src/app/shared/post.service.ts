import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {Post, FbCreateResponse} from "./interfaces";
import {environment} from "../../environments/environment";


@Injectable({providedIn: 'root'})
export class PostService {
  constructor(public http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post<FbCreateResponse>(`${environment.fBDbUrl}/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date),
        };
      }))
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fBDbUrl}/posts.json`)
      .pipe(map((response:{[key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.fBDbUrl}/posts/${id}.json`)
      .pipe(map((post:Post) => {
        return {
            ...post, id,
            date: new Date(post.date)
          }
        }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fBDbUrl}/posts/${id}.json`)
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${environment.fBDbUrl}/posts/${post.id}.json`, post)
  }
}
