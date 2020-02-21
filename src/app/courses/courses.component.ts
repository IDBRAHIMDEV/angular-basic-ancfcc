import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  editable: boolean = false;

  myCourse: any = {
    id: 0,
    label: "" 
  };

  courses: any[] = [
    {id: 1, label: "Learn Angular"},
    {id: 2, label: "Learn VueJS"},
    {id: 3, label: "Learn ReactJS"},
    {id: 4, label: "Learn NodeJS"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addCourse() {
    this.courses = [this.myCourse, ...this.courses];
    this.myCourse = {
      id: 0,
      label: "" 
    };
  }

  deleteCourse(course) {

    Swal.fire({
      title: 'Are you sure to detele',
      text: 'delete this cousre ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
       
        Swal.fire( {
          title: 'Deleted!',
          text: 'Course deleted SuccessFully',
          icon: 'success',
          timer: 5000
        })
        
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
      
      }
    })
  }

  editCourse(course) {
    this.myCourse = course;
    this.editable = true;
  } 

  updateCourse() {

    this.editable = false;
    this.myCourse = {
      id: 0,
      label: ""
    }

  }

}
