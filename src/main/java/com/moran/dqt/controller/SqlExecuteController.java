package com.moran.dqt.controller;

import com.moran.dqt.api.AbstractController;
import com.moran.dqt.api.Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping ("/Sql/")
public class SqlExecuteController extends AbstractController
{

    /**
     * Sql工具默认首页
     */

    @RequestMapping (value = "/Index", method = RequestMethod.GET)
    public String index()
    {

        return "index";
    }


    @ResponseBody
    @RequestMapping (value = "/Execute", method = RequestMethod.POST)
    public Result execute(String sql)
    {
        Result result = new Result();

        return result;
    }
}
