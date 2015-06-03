package com.moran.dqt.dao.ic;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import com.moran.dqt.api.MultipleDataSource;

public class YunChuangDaoInterCeptor implements MethodInterceptor
{
    @Override
    public Object invoke(MethodInvocation invocation) throws Throwable
    {
        MultipleDataSource.setDataSourceKey("ycDataSource");
        return invocation.proceed();
    }
}
