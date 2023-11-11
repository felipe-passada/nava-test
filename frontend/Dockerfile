FROM node
WORKDIR /usr/src/app
COPY . /usr/src/app
ADD ./start.sh /usr/src/app
RUN npm install
RUN npm install -g @angular/cli
RUN chmod +x /usr/src/app/start.sh
CMD /usr/src/app/start.sh
