import {Component, OnInit} from '@angular/core';
import {House} from '../../../models/house.model.client';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-houses-edit',
  templateUrl: './houses-edit.component.html',
  styleUrls: ['./houses-edit.component.css']
})
export class HousesEditComponent implements OnInit {
  house: House;
  userId: String;

  constructor(private houseService: HouseService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.house = new House('123', 'Facebook', '123', '456', '#', 'Lorem', '123', 'agent', 'house');
  }

  updateHouse() {
    this.houseService.updateHouse(this.house._id, this.house).subscribe(house => {
      this.router.navigateByUrl('/user/' + this.userId + '/house/' + this.house._id + '/detail');
    });
  }

  deleteHouse() {
    this.houseService.deleteHouse(this.house._id).subscribe(house => {
      this.router.navigateByUrl('/user/' + this.userId + '/house');
    });
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.house._id = params['hid'];
      this.userId = params['uid'];
      console.log('house id: ' + this.house._id);
    });
    this.houseService.findHouseById(this.house._id)
      .subscribe(data => {
        console.log('in house-edit comp...');
        console.log(data);
        this.house = data;
      });

  }

}
