// Sample array of student objects
var students = [
  {
    name: "John",
    chemistryMarks: 80,
    biologyMarks: 90,
    dateOfBirth: "01-01-2000"
  },
  {
    name: "Alice",
    chemistryMarks: 85,
    biologyMarks: 95,
    dateOfBirth: "05-03-1999"
  },
  {
    name: "Bob",
    chemistryMarks: 90,
    biologyMarks: 80,
    dateOfBirth: "12-06-2001"
  },
  // Add more student objects as needed
];

// Custom sort function based on the given rules
function sortStudents(a, b) {
  // Sort by total marks (first priority)
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // Sort by biology marks (second priority)
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // Sort by date of birth (third priority)
  return 0;
}

// Sort the array of students using the custom sort function
students.sort(sortStudents);

// Output the sorted array
console.log(students);