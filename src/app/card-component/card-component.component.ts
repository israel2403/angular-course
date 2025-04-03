import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  standalone: false,

  templateUrl: "./card-component.component.html",
  styleUrl: "./card-component.component.css",
})
export class CardComponentComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({ alias: "index", required: true })
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  onCourseView() {
    console.log("Card componnent- button clicked");
    this.courseEmitter.emit(this.course);
  }
  cardClasses() {
    return {
      beginner: this.course.category === "BEGINNER",
    };
  }
  cardStyles(): { [key: string]: string } {
    return {
      "text-decoration": "underline",
    };
  }
}
