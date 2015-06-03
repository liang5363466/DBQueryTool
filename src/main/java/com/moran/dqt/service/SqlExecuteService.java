package com.moran.dqt.service;

import java.util.List;
import java.util.Map;

public interface SqlExecuteService
{
    List<Map<String, Object>> getTop10BusInfo();
}
