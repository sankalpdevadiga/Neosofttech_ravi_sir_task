package com.neosoft.sampleproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.neosoft.sampleproject.entity.Employee;

@CrossOrigin
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
