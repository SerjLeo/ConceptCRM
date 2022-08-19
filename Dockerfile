FROM node:14 AS front-builder

ENV NODE_ENV production


COPY ./client ./
WORKDIR /client

RUN yarn \
    && yarn build

FROM golang:1.17.3-alpine3.14 AS back-builder

COPY ./server ./
WORKDIR /server

RUN go mod download && go get -u ./...
RUN go build -o bin/main cmd/main.go

FROM alpine:latest

WORKDIR /root/

COPY --from=0 /client/build ./build
COPY --from=1 /github.com/SerjLeo/SpanglishTutorOrigin/bin/main .
COPY --from=1 /github.com/SerjLeo/SpanglishTutorOrigin/config.yml .
COPY --from=1 /github.com/SerjLeo/SpanglishTutorOrigin/.env .
COPY --from=1 /github.com/SerjLeo/SpanglishTutorOrigin/templates/ ./templates

EXPOSE 80

CMD ["./main"]