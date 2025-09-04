<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Form</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .student-card { background: #f4f4f4; margin: 10px 0; padding: 10px; border-radius: 5px; }
    .delete-btn { background: red; color: white; border: none; padding: 5px 10px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Student Registration</h2>
  <form id="studentForm">
    <input type="text" id="name" placeholder="Enter Name" required>
    <input type="number" id="age" placeholder="Enter Age" required>
    <input type="text" id="course" placeholder="Enter Course" required>
    <button type="submit">Add Student</button>
  </form>

  <div id="studentList"></div>

  <script>
    const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    let students = [];

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const age = document.getElementById('age').value.trim();
      const course = document.getElementById('course').value.trim();

      if (name && age && course) {
        const student = { id: Date.now(), name, age, course };
        students.push(student);
        renderStudents();
        form.reset();
      }
    });

    function renderStudents() {
      studentList.innerHTML = '';

      students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';

        card.innerHTML = `
          <h3>${student.name}</h3>
          <p>Age: ${student.age}</p>
          <p>Course: ${student.course}</p>
          <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
        `;

        studentList.appendChild(card);
      });
    }

    function deleteStudent(id) {
      students = students.filter(student => student.id !== id);
      renderStudents();
    }
  </script>
</body>
</html>
