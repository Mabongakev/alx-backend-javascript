#!/usr/bin/env node

// This file contains a TypeScript interface and an array of student objects
interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: student = {
    firstName: "Kelvin",
    lastName: "Simiyu",
    age: 20,
    location: "Nairobi"
};

const student2: student = {
    firstName: "Jane",
    lastName: "Wangari",
    age: 22,
    location: "Nyeri"
};

// This function takes an array of students 
const studentsList: student[] = [student1, student2];

// create a table and append the students to the table
const table = document.createElement("table");
const header = table.createTHead();
const headerRow = header.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.textContent = "First Name";
const lastNameHeader = headerRow.insertCell();
lastNameHeader.textContent = "Last Name";
const ageHeader = headerRow.insertCell();
ageHeader.textContent = "Age";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";


// Populate the table with the students data
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    const lastNameCell = row.insertCell();
    lastNameCell.textContent = student.lastName;
    const ageCell = row.insertCell();
    ageCell.textContent = student.age.toString();
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
