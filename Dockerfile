FROM node:18-slim

WORKDIR /usr/src/app

# Install express directly since there is no package.json
RUN npm install express

# Copy your app.js into the container
COPY app.js .

EXPOSE 4455

CMD [ "node", "app.js" ]