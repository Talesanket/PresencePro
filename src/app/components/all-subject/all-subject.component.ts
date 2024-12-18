import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent implements OnInit {
  subjects: any[] = [];
  errorMessage: string = ''; // To store error messages

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.fetchAllSubjects();
  }

  fetchAllSubjects(): void {
    this.subjectService.getAllSubjects().subscribe(
      (response) => {
        this.subjects = response; // Assign response data to the `subjects` array
        this.errorMessage = '';  // Clear any existing error messages
      },
      (error) => {
        console.error('Error fetching subjects:', error);
        this.errorMessage = 'Failed to load subjects. Please try again later.';
      }
    );
  }
}
