import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Router} from '@angular/router';
import { FormGroup,FormControl,Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!:FormGroup;

  constructor(public usersService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      empName:new FormControl('',[Validators.required]),
      empEmail:new FormControl('',Validators.required),
      empMobile:new FormControl('',Validators.required)

    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.usersService.create(this.form.value).subscribe(res =>{
      console.log('User Created Successfully');
      this.router.navigateByUrl('users/index');
    })
  }

}
