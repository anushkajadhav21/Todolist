import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newTask = '';

  errorMessage = '';
  todo: string[] = [];
  
  isEdit =false;
  currentTaskIndex = 0;

  add(newTask: string)
  {
    this.errorMessage = ''; // Clear any previous error message

    if (newTask.trim() === '') {
      this.errorMessage = 'Please enter the task.';
      return; // Do not proceed if the task is empty
    }else{
      this.errorMessage = 'Please enter the task'
    }

    if (this.todo.includes(newTask)) {
      this.errorMessage = 'Task already exists in the list.';
      return; // for repeated Tasks
    }

    this.todo.push(newTask);
    this.newTask = ''; 
  }

  remove(index: number)
  {
    this.todo.splice(index, 1);
  }


  edit(index: number)
  {
    this.isEdit = true;
    this.currentTaskIndex = index;
    this.newTask = this.todo[index];

  }

  save()
  {
    this.todo[this.currentTaskIndex] = this.newTask;
    this.isEdit = false;
    this.newTask = '';
  }

  cancelEdit(){
    this.isEdit = false;
    this.newTask = '';
  }
}