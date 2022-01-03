import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users:Users[]=[];


  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data:Users[])=>{
       this.users = data;
       console.log(this.users);
    })
  }
  deleteUsers(id:any){
    this.usersService.delete(id).subscribe(res=>{
      this.users=this.users.filter(item=>item.id!==id);
      console.log('Employee Successfully deleted');
    })
  }
}
