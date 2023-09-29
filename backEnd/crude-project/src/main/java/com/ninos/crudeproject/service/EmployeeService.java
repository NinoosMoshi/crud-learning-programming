package com.ninos.crudeproject.service;

import java.util.List;

import com.ninos.crudeproject.entity.Employee;

public interface EmployeeService {

    Employee saveEmployee(Employee employee);
    List<Employee> getEmployees();
    Employee getEmployee(Long id);
    void deleteEmployee(Long id);
    Employee updateEmployee(Employee employee);

}
