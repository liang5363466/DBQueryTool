package com.moran.dqt.api;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Result implements Serializable
{

	private static final long	serialVersionUID	= 7251734178724584350L;

	private Map<String, Object>	data				= new HashMap<String, Object>();
	private String				message				= "";
	private boolean				success				= true;

	public Result()
	{

	}

	public Result(boolean success)
	{
		this.success = success;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	public Map<String, Object> getData()
	{
		return data;
	}

	public void setData(Map<String, Object> data)
	{
		this.data = data;
	}

	public boolean isSuccess()
	{
		return success;
	}

	public void setSuccess(boolean success)
	{
		this.success = success;
	}

}
