package com.moran.dqt.dao;

import com.moran.dqt.api.PureSqlProvider;
import org.apache.ibatis.annotations.SelectProvider;

import java.util.List;
import java.util.Map;

public interface SqlExecuteDao
{
    @SelectProvider (type = PureSqlProvider.class,method = "sql")
    List<Map<String, Object>> executeSql(String sql);
}
