import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users:Users[]=[];
  dataSource:MatTableDataSource<Users> | undefined



  constructor(public usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data:Users[])=>{
       this.users = data;
       console.log(this.users);
    })
  }
  deleteUsers(_id:any){
    this.usersService.delete(_id).subscribe(res=>{
      this.users=this.users.filter(item=>item._id!==_id);
      console.log('Employee Successfully deleted');
    })
  }
}
