package com.ninos.crudeproject.service;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ninos.crudeproject.dao.EmployeeRepository;
import com.ninos.crudeproject.entity.Employee;


@RequiredArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepository;


    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }


    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id).orElseThrow();
    }


    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    
    @Override
    public Employee updateEmployee(Employee employee) {
        Employee employeeById = employeeRepository.findById(employee.getEmployeeId()).orElseThrow();
        return employeeRepository.save(employee);
    }


}
