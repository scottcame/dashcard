# Dockerfile to create an image with the demo dashboard deployed with mondrian-rest

FROM ojbc/mondrian-rest

RUN mkdir -p /opt/tomcat/webapps/dashcard/css & mkdir -p /opt/tomcat/webapps/dashcard/js

COPY demo.html /opt/tomcat/webapps/dashcard/
COPY css /opt/tomcat/webapps/dashcard/css/
COPY js /opt/tomcat/webapps/dashcard/js/

RUN sed -i -e "s/DEMO_MODE = true;/DEMO_MODE = false;/g" /opt/tomcat/webapps/dashcard/js/viz-config.js
