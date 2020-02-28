FROM node:latest

# 작업 폴더를 만들고 npm 설치
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn

# 소스를 작업폴더로 복사하고 앱 실행
COPY . /app
CMD ["yarn", "start"]