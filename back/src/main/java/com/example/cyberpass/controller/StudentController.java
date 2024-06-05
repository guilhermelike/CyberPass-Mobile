package com.example.cyberpass.Controller;

import com.example.cyberpass.Modal.Student;
import com.example.cyberpass.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/students")
    public List<Student> getAllStudents()
    {
        return studentService.getAllStudents();
    }

    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable Long id)
    {
        return studentService.getStudent(id);
    }

    @PostMapping("/student/")
    public Student createStudent(@RequestBody Student student )
    {
        return studentService.createStudent(student);
    }

    @DeleteMapping("/students/{id}")
    public String removeStudent(@PathVariable Long id)
    {
        return studentService.removeStudent(id);
    }
}