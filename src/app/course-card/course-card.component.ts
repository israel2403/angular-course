import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [BrowserAnimationsModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course: Course;

  @Input()
  index: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Card component - button clicked ...');
    this.courseEmitter.emit(this.course);
  }

  cardClasses(): any {
    return { 'beginner': this.course.category === 'BEGINNER' }
  }
  cardStyles(): any {
    return { 'text-decoration': 'underline' }
  }
}
