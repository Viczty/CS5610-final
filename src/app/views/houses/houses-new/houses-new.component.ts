import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HouseService} from '../../../services/house.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-houses-new',
  templateUrl: './houses-new.component.html',
  styleUrls: ['./houses-new.component.css']
})
export class HousesNewComponent implements OnInit {
  userId: String;
  role: String;
  @ViewChild('f') loginForm: NgForm;
  house: {};

  constructor(private houseService: HouseService, private router: Router, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
  }

  createHouse() {
    const name = this.loginForm.value.name;
    const description = this.loginForm.value.description;
    const price = this.loginForm.value.price;
    const url = this.loginForm.value.url;

    if (this.sharedService.role !== 'Agent') {
      this.house = {name: name, description: description, price: price, url: url, owner: this.sharedService.user};
    } else {
      const owner = this.loginForm.value.owner;
      this.house = {name: name, description: description, price: price, url: url, agent: this.userId, owner: owner};
    }
    this.houseService.createHouse(this.userId, this.house).subscribe(hou => {
      this.router.navigateByUrl('/user/' + this.userId + '/house');
    });
  }

  ngOnInit() {
    console.log(this.sharedService.user);
    this.role = this.sharedService.role;
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];

    });
  }

}
