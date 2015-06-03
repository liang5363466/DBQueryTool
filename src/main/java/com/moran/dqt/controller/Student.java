package com.moran.dqt.controller;

public class Student
{
    private String name;
    private Integer age;

    public String introduction()
    {
        return "大家好，我叫："+this.name+"，年龄："+this.age+"岁！";
    }

    public void speech(String question)
    {
        System.out.println("我演讲的题目是："+question);
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Integer getAge()
    {
        return age;
    }

    public void setAge(Integer age)
    {
        this.age = age;
    }


}


