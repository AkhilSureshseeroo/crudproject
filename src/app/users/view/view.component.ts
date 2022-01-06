import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!:number;
  users!:Users;

  constructor(
    public usersService:UsersService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['userId'];

    this.usersService.find(this.id).subscribe((data:Users)=>{
      this.users=data;
    });
  }

}
