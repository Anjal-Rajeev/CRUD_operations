import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  api:String = 'http://localhost:3000'

  getAllStudents(){
    return this.http.get(`${this.api}/student/all-students`)
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.api}/student/delete-student/${id}`)
  }

  ceateStudent(data:any){
    return this.http.post(`${this.api}/student/create-student`,{data:data})
  }

  getSingleStudent(id:any){
    return this.http.get(`${this.api}/student/single-student/${id}`)
  }

  editStudent(data:any, id:any){
    return this.http.put(`${this.api}/student/edit-student/${id}`,{data:data})
  }
}
