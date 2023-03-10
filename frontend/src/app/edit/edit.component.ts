import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formData:any ={}
  id:any

  constructor(private http:StudentService, private activeRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.paramMap.get('id')

    this.http.getSingleStudent(this.id).subscribe(res=>{
      this.formData = res
      console.log(this.formData);
      
    })

  }

  onSubmit(data:any){
    console.log("new ",this.formData);
    this.http.editStudent(data,this.id).subscribe(res=>{
      console.log(res);
      this.router.navigateByUrl('/main')
    })
  }

}
