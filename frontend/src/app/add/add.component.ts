import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formData ={
    name : '',
    email : '',
    age : '',
    course : '',
    year : ''
  }

  constructor(private http: StudentService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    // console.log(data);
    this.http.ceateStudent(data).subscribe(res=>{
      // console.log(res);
      this.router.navigateByUrl('/main')
    })
  }
}
