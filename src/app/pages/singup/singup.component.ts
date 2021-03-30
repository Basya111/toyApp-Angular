import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user = {
    username: ''
  }

  ngOnInit(): void {
  }

  signupUser(){
    this.userService.signUp(this.user.username)
    this.router.navigateByUrl('/toy')
  }

}
