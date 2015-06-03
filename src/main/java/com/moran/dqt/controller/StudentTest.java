package com.moran.dqt.controller;

public class StudentTest
{
    public static void main(String[] args)
    {
        Student stu = new Student();
        stu.setName("张三");
        stu.setAge(15);
        System.out.println(stu.introduction());
        stu.speech("Java编程");

    }
}