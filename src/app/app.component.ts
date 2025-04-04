import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "src/db-data";
import { CardComponentComponent } from "./card-component/card-component.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  public courses = [...COURSES];

  @ViewChild("cardRef1")
  card1: CardComponentComponent;

  @ViewChild("cardRef2")
  card2: CardComponentComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {
    console.log(this.containerDiv);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
