#!/usr/bin/env node

interface  Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yearsOfExperience?: number;
    fullTimeEmployee: boolean;
    location: string;
    contract?: boolean;
    [key: string]: any; 
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)} ${lastName}`;
}


// Define an interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}
  
// Define an interface for the class structure
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}
  
// Implement the class using the interfaces
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;
  
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework(): string {
    return "Currently working";
  }
  
  displayName(): string {
    return this.firstName;
  }
}
