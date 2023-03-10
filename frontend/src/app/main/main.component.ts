import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  students:any 
  show = false

  constructor(private http:StudentService, private router:Router) { }

  ngOnInit(): void {

    this.http.getAllStudents().subscribe(res=>{
      console.log(res);
      this.students = res
    })

  }

  deleteStudent(id:any){
    this.show = true
    console.log(id);
    this.http.deleteStudent(id).subscribe(res=>{
      console.log(res);
      this.ngOnInit()
    })
    
  }

  editStudent(id:any){
    this.router.navigateByUrl(`/edit/${id}`)
  }

}
