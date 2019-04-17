import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {House} from '../models/house.model.client';

@Injectable()
export class HouseService {
  constructor(private _http: HttpClient) {
  }

  baseUrl = environment.baseUrl;

  createHouse(userId, house) {
    return this._http.post<House>(this.baseUrl + '/api/user/' + userId + '/house', house);
  }

  findHouses() {
    return this._http.get<[House]>(this.baseUrl + '/api/house');
  }

  findHousesByUser(userId) {
    return this._http.get<[House]>(this.baseUrl + '/api/user/' + userId + '/house');
  }

  findHouseById(houseId) {
    return this._http.get<House>(this.baseUrl + '/api/house/' + houseId);
  }

  findHouseByBuyerId(userId) {
    return this._http.get<[House]>(this.baseUrl + '/api/user/' + userId + '/order');
  }

  findHouseByAgentId(userId) {
    return this._http.get<[House]>(this.baseUrl + '/api/user/' + userId + '/agentOrder');
  }
  updateHouse(houseId, house) {
    return this._http.put<House>(this.baseUrl + '/api/house/' + houseId, house);
  }

  deleteHouse(houseId) {
    return this._http.delete<House>(this.baseUrl + '/api/house/' + houseId);
  }

  deleteOrder(houseId, house) {
    return this._http.put<House>(this.baseUrl + '/api/house/' + houseId + '/order', house);
  }
}
