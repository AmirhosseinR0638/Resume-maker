import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularApp1';
  grades = [
    { value: 'دیپلم', display: 'دیپلم', id: '0', name: 'grade' },
    { value: 'لیسانس', display: 'لیسانس', id: '1', name: 'grade' },
    { value: 'فوق لیسانس', display: 'فوق لیسانس', id: '2', name: 'grade' },
    { value: 'دکتریٰ', display: 'دکتریٰ', id: '3', name: 'grade' },
  ];
  @ViewChild('formInformation') mainForm: NgForm;
  firstName: string = '';
  lastName: string = '';
  gender: string = '';
  dateOfBirth: string = '';
  city: string = '';
  email: string = '';
  linkedinAddress: string = '';
  phoneNumber: string = '';
  website: string = '';
  moreInfo: string = '';
  job: string = '';
  jobDetail: string = '';
  otherSkills: string[] = [];
  education: string = '';
  orientation: string = '';
  host: string = '';
  workExperienceSaver = [];
  jobTitle: string = '';
  officeName: string = '';
  startCooperationYear: string = '';
  courseLists = [];
  courseTitle: string = '';
  CourseHost: string = '';
  dateOfCertified: string = '';
  disableDeleteAddBtn: boolean = false;
  disableAddWorkExpBtn: boolean = false;
  wantAddSkill: boolean = false;
  hasJobCheckedBtn: boolean = false;
  participateInCourse: boolean = false;
  isCourseListFulled: boolean = false;
  formSubmitted: boolean = false;
  showAddSkillPart() {
    this.wantAddSkill = !this.wantAddSkill;
  }
  addToSkills() {
    if (this.mainForm['value'].skillsInfo.otherSkill != '') {
      this.otherSkills.push(this.mainForm['value'].skillsInfo.otherSkill);
      this.mainForm.form.patchValue({ skillsInfo: { otherSkill: '' } });
      if (this.otherSkills.length == 5) {
        this.disableDeleteAddBtn = true;
      }
    }
  }
  deleteSkills(deleteSkills: string) {
    let deleteIndex = this.otherSkills.indexOf(deleteSkills);
    this.otherSkills.splice(deleteIndex, 1);
    this.disableDeleteAddBtn = false;
  }
  addWorkExperience() {
    this.workExperienceSaver.push({
      jobTitle: this.mainForm['value'].workExperience.jobTitle,
      officeName: this.mainForm['value'].workExperience.officeName,
      startCooperationYear: this.mainForm['value'].workExperience.startCY,
    });

    if (this.workExperienceSaver.length == 4) {
      this.disableAddWorkExpBtn = true;
    }
    this.mainForm.form.patchValue({
      workExperience: {
        jobTitle: '',
        officeName: '',
        startCY: '',
      },
    });
  }
  deleteWorkEXP(deleteIndex: number) {
    this.workExperienceSaver.splice(deleteIndex, 1);
    this.disableAddWorkExpBtn = false;
  }
  hasJob() {
    this.hasJobCheckedBtn = !this.hasJobCheckedBtn;
  }
  hasCourse() {
    this.participateInCourse = !this.participateInCourse;
  }
  addToCourses() {
    this.courseLists.push({
      courseTitle: this.mainForm['value'].course.courseTitle,
      CourseHost: this.mainForm['value'].course.courseHost,
      dateOfCertified: this.mainForm['value'].course.dateOC,
    });
    if (this.courseLists.length == 5) {
      this.isCourseListFulled = true;
    }
    this.mainForm.form.patchValue({
      course: {
        courseTitle: '',
        courseHost: '',
        dateOC: '',
      },
    });
  }
  deleteCourse(deleteItem) {
    let indexOfDeleteItem = this.courseLists.indexOf(deleteItem);
    this.courseLists.splice(indexOfDeleteItem, 1);
    this.isCourseListFulled = false;
  }
  onSubmit() {
    this.firstName = this.mainForm['value'].personalInfo.fname;
    this.lastName = this.mainForm['value'].personalInfo.lname;
    this.gender = this.mainForm['value'].personalInfo.gender;
    this.dateOfBirth = this.mainForm['value'].personalInfo.dob;
    this.city = this.mainForm['value'].personalInfo.city;
    this.email = this.mainForm['value'].personalInfo.email;
    this.phoneNumber = this.mainForm['value'].personalInfo.Tel;
    this.linkedinAddress = this.mainForm['value'].personalInfo.linkedin;
    this.website = this.mainForm['value'].personalInfo.website;
    this.job = this.mainForm['value'].personalInfo.job;
    this.jobDetail = this.mainForm['value'].personalInfo.jobDetail;
    this.moreInfo = this.mainForm['value'].personalInfo.aboutMe;
    this.education = this.mainForm['value'].educationalInfo.grade;
    this.orientation = this.mainForm['value'].educationalInfo.orientation;
    this.host = this.mainForm['value'].educationalInfo.host;
    this.formSubmitted = true;
    this.mainForm.form.reset();
  }
  isShownDownloadBTN: boolean = true;
  printCV() {
    this.isShownDownloadBTN = false;
    window.print();
  }
}
