package com.moran.dqt.api;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

public class ApplicationEvent implements ApplicationListener<ContextRefreshedEvent>
{

	private ScheduledExecutorService	osmPointSchedule;

	private ScheduledExecutorService	realTimeSchedule;

	private ScheduledExecutorService	stationScanSchedule;

	private ScheduledExecutorService	busStationScanSchedule;

	private ScheduledExecutorService	busLineScanSchedule;

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event)
	{
		// 开启段经纬度点缓存持续获取线程，1天一次
//		this.osmPointSchedule = Executors.newScheduledThreadPool(1);
//		final OsmPointCache osmPointCache = (OsmPointCache) SpringContextUtil.getBean("osmPointCache");
//		osmPointSchedule.scheduleAtFixedRate(osmPointCache, 0, 1, TimeUnit.DAYS);


	}

}
