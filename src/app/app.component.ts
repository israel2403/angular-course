import { Component } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = [...COURSES];

  startDate = new Date(2000, 0, 1);
  onCourseSelected(course: Course) {
    console.log("App componnent - click event bubbled...", course);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
