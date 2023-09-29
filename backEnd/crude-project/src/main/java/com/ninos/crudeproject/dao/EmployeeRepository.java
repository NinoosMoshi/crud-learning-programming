package com.ninos.crudeproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ninos.crudeproject.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
