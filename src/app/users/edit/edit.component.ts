import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Users } from '../users';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!:number;
  users!:Users;
  form!:FormGroup;
  snapshot: any;

  constructor(
    public usersService:UsersService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id=this.snapshot.params.id;
    this.usersService.find(this.id).subscribe((data:Users)=>{
      this.users=data
    });
    this.form=new FormGroup({
      empName:new FormControl('',[Validators.required]),
      empEmail:new FormControl('',Validators.required),
      empMobile:new FormControl('',Validators.required)
    })
  }get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.usersService.update(this.id,this.form.value).subscribe(res=>{
      console.log('Employee record updated Successfully')
      this.router.navigateByUrl('users/index');
    })
  }

}
