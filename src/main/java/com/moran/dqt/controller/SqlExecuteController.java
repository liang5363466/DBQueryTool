package com.moran.dqt.controller;

import com.moran.dqt.api.AbstractController;
import com.moran.dqt.api.Result;
import com.moran.dqt.service.SqlExecuteService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping ("/Sql/")
public class SqlExecuteController extends AbstractController
{

    @Resource
    private SqlExecuteService sqlService;

    @RequestMapping (value = "/Index", method = RequestMethod.GET)
    public String index()
    {

        return "index";
    }


    @ResponseBody
    @RequestMapping (value = "/Execute", method = RequestMethod.POST)
    public Result execute(String sql)
    {
        Result result = new Result(true);
        try
        {
            result.getData().put("result",sqlService.executeSql(sql));
        }
        catch(Exception e)
        {
            result.setSuccess(false);
        }

        return result;
    }
}
