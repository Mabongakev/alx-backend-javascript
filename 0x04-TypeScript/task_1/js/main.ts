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
