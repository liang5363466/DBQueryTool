package com.moran.dqt.dao;

import java.util.List;
import java.util.Map;

public interface SqlExecuteDao
{
    List<Map<String, Object>> getTop10BusInfo();
}
