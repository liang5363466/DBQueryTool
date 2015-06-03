package com.moran.dqt.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public abstract class AbstractController extends MultiActionController
{

	protected static final Logger		log			= Logger.getRootLogger();
	protected static final String		LINE_SEP	= System.getProperty("line.separator");

	protected HttpServletRequest	request;
	protected HttpServletResponse	response;
	protected HttpSession			session;

	@ModelAttribute
	public void setReqAndRes(HttpServletRequest request, HttpServletResponse response)
	{
		this.request = request;
		this.response = response;
		StringBuilder sb = new StringBuilder();
		try
		{
			sb.append("[REQ] ")
			.append(request.getRemoteAddr())
			.append(" (")
			.append(request.getRemoteUser())
			.append(")")
			.append(" -> ")
			.append(request.getRequestURI())
			.append(LINE_SEP)
			.append(new ObjectMapper()
			.writeValueAsString(request.getParameterMap()));
		}
		catch (JsonProcessingException e)
		{
			log.error(null, e);
		}
		finally
		{
			log.info(sb.toString());
		}
	}

	@ModelAttribute
	protected void beforeExecuting(HttpServletRequest request, HttpServletResponse response)
	{
		this.request = request;
		this.response = response;
		this.session = request.getSession();
	}

	protected Object request(String key)
	{
		return request.getAttribute(key);
	}

	protected void request(String key, Object obj)
	{
		request.setAttribute(key, obj);
	}

	protected Object session(String key)
	{
		return session.getAttribute(key);
	}

	protected void session(String key, Object obj)
	{
		session.setAttribute(key, obj);
	}
}
