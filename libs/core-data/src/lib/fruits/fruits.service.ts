import { Injectable } from '@angular/core';
import { Fruit } from './fruit.model';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  model = 'fruits';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findOne(fruit: Fruit) {
    return this.httpClient.get(this.getUrlForId(fruit));
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(fruit: Fruit) {
    return this.httpClient.post(this.getUrl(), fruit);
  }

  delete(fruit: Fruit) {
    return this.httpClient.delete(this.getUrlForId(fruit.id));
  }

  update(fruit: Fruit) {
    return this.httpClient.put(this.getUrlForId(fruit.id), fruit);
  }
}
