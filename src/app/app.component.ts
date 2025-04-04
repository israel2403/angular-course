import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  public courses = [...COURSES];

  @ViewChild("cardRef1", { read: ElementRef })
  card1: ElementRef;

  @ViewChild("container")
  containerDiv: ElementRef;

  constructor() {
    console.log("containerDiv", this.card1);
  }

  ngAfterViewInit() {
    console.log("containerDiv", this.card1);
  }

  onCourseSelected(course: Course) {
    console.log("containerDiv", this.card1);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
