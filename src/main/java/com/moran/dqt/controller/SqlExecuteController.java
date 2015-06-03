package com.moran.dqt.controller;

import com.moran.dqt.api.AbstractController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping ("/SqlExecute/")
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

}
