import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { VeiwProfileComponent } from './components/veiw-profile/veiw-profile.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { AllAttendanceComponent } from './components/all-attendance/all-attendance.component';
import { HomeComponent } from './components/home/home.component';

// Pipes
import { PasswordMaskPipe } from './pipes/password-mask.pipe';

// Services
import { SubjectService } from './services/subject.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    AddUserComponent,
    AllUserComponent,
    UserProfileComponent,
    AddSubjectComponent,
    AllSubjectComponent,
    AddStudentComponent,
    AllStudentComponent,
    StudentProfileComponent,
    VeiwProfileComponent,
    TakeAttendanceComponent,
    AllAttendanceComponent,
    HomeComponent,
    PasswordMaskPipe, // Pipe declared here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Required for two-way binding
    HttpClientModule, // Required for HTTP requests
  ],
  providers: [
    SubjectService, // Optional since it is already providedIn: 'root'
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
