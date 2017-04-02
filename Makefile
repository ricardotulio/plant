up:
	docker-compose up -d; \
  docker-compose exec mongo bash -c /build/create-mongo-user.sh
