FROM node:16-alpine

RUN mkdir /app

ENV NEXT_PUBLIC_BASE_URL=""
ENV NEXTAUTH_URL=""
ENV GOOGLE_CLIENT_ID=""
ENV GOOGLE_CLIENT_SECRET=""
ENV SECRET=""
ENV JWT_SECRET=""

COPY . /app

RUN yarn --cwd /app install

CMD ["yarn", "--cwd", "/app", "serve"]