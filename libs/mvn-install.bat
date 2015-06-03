mvn install:install-file -DgroupId=com.oracle -DartifactId=ojdbc14 -Dversion=10.2.0.4.0 -Dpackaging=jar -Dfile=ojdbc14.jar
mvn install:install-file -DgroupId=org.eclipse.paho -DartifactId=org.eclipse.paho.client.mqttv3 -Dversion=0.4.0 -Dpackaging=jar -Dfile=mqtt-0.4.0.jar
mvn install:install-file -DgroupId=org.apache.axis2 -DartifactId=axis2-transport-http -Dversion=1.6.2 -Dpackaging=jar -Dfile=axis2-transport-http-1.6.2.jar
mvn install:install-file -DgroupId=com.sybase -DartifactId=jconn4 -Dversion=4 -Dpackaging=jar -Dfile=jconn4.jar
mvn install:install-file -DgroupId=net.sf.json-lib -DartifactId=json-lib -Dversion=2.2 -Dpackaging=jar -Dfile=json-lib-2.2-jdk15.jar
mvn install:install-file -DgroupId=org.apache.commons -DartifactId=commons-lang2 -Dversion=2.4 -Dpackaging=jar -Dfile=commons-lang-2.4.jar
mvn install:install-file -DgroupId=net.sf.ezmorph -DartifactId=ezmorph -Dversion=1.0.5 -Dpackaging=jar -Dfile=ezmorph-1.0.5.jar
mvn install:install-file -DgroupId=commons-beanutils -DartifactId=commons-beanutils -Dversion=1.8.0 -Dpackaging=jar -Dfile=commons-beanutils-1.8.0.jar