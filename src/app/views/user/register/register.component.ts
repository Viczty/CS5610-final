import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  user;
  error;
  roles = ['Admin', 'Seller', 'Buyer', 'Agent'];

  constructor(private userService: UserService, private router: Router) {

  }

  register() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    const role = this.loginForm.value.role;
    this.user = {username: username, password: password, role: role};

    // this.userService.createUser(this.user)
    //   .subscribe((user: User) => {
    //     if (user) {
    //       this.router.navigate(['/user', user._id]);
    //     }
    //   });
    this.userService.register(username, password, role).subscribe((user: any) => {
      this.router.navigate(['/user', user._id]);
    }, (error: any) => {
      this.error = error._body;
    });
  }

  ngOnInit() {
  }

}
