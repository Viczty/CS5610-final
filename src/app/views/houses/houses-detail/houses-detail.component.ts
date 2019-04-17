import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {House} from '../../../models/house.model.client';
import {SharedService} from '../../../services/shared.service';
import {PublicService} from '../../../services/public.service';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-houses-detail',
  templateUrl: './houses-detail.component.html',
  styleUrls: ['./houses-detail.component.css']
})
export class HousesDetailComponent implements OnInit {
  userId: String;
  houseId: String;
  user: String;
  house: House;
  role: String;
  @ViewChild('f') loginForm: NgForm;


  constructor(private houseService: HouseService, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService, private publicService: PublicService) {
    // this.house = new House('1', '1', '1', '1', '1', '1', '1', '1');
    this.user = sharedService.user;
    this.role = sharedService.role;
  }

  buy(house) {
    if (this.role === 'Agent') {
      const buyer = this.loginForm.value.buyer;
      this.house.agent = this.userId;
      this.userService.findUserByUsername(buyer).subscribe(user => {
        this.house.buyer = user._id;
        this.houseService.updateHouse(this.houseId, this.house).subscribe(hou => {
          this.router.navigateByUrl('/user/' + this.userId + '/order');
        });
      });
    } else {
      this.house.buyer = this.userId;
      this.houseService.updateHouse(this.houseId, this.house).subscribe(hou => {
        this.router.navigateByUrl('/user/' + this.userId + '/order');
      });
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.houseId = params['hid'];
    });
    this.houseService.findHouseById(this.houseId)
      .subscribe(data => {
        console.log('in houses-detail comp...');
        console.log(data);
        this.house = data;
      });
  }

}
