import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'all-user',
    component: AllUserComponent,
  },
  {
    path: 'user-profile/:username',
    component: UserProfileComponent,
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
  },
  {
    path: 'all-subject',
    component: AllSubjectComponent,
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: 'all-student',
    component: AllStudentComponent,
  },
  {
    path: 'student-profile',
    component: StudentProfileComponent,
  },
  {
    path: 'view-profile',
    component: VeiwProfileComponent,
  },
  {
    path: 'take-attendance',
    component: TakeAttendanceComponent,
  },
  {
    path: 'all-attendance',
    component: AllAttendanceComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
