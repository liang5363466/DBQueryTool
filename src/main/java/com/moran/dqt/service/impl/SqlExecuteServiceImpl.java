package com.moran.dqt.service.impl;

import com.moran.dqt.dao.SqlExecuteDao;
import com.moran.dqt.service.SqlExecuteService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service ("sqlExecuteServiceImpl")
public class SqlExecuteServiceImpl implements SqlExecuteService
{

//    @Resource
//    private SqlExecuteDao sqlExecuteDao;

    @Override
    public List<Map<String, Object>> getTop10BusInfo()
    {
        return null;
    }
}
