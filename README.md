# Docker Sample Website

A responsive sample website using plain HTML, CSS, and JavaScript, served by Nginx in an Alpine-based Docker container. No Node.js or package installation is required.

## Run with Docker Compose

Install Docker with the Compose plugin, then run from this directory:

```sh
docker compose up --build -d
```

Open **http://localhost:8080**. The port is bound to localhost by default.

```sh
docker compose ps          # Container and health status
docker compose logs -f     # Server logs
docker compose down        # Stop and remove the container
```

To use a different host port:

```sh
PORT=3000 docker compose up --build -d
```

## Run with Docker directly

```sh
docker build -t docker-sample-website .
docker run -d --name sample-website -p 127.0.0.1:8080:8080 docker-sample-website
```

Stop and remove it with `docker rm -f sample-website`.

## Customize

- `public/index.html`: page content
- `public/styles.css`: responsive styling
- `public/app.js`: copy-command interaction
- `nginx.conf`: server configuration, including the `/health` endpoint
- `Dockerfile`: image and health check
- `compose.yaml`: port mapping and restart policy

After changing files, run `docker compose up --build -d` again. Unknown paths return HTTP 404. Verify the server with `curl -fsS http://localhost:8080/health`.

The Copy button uses the browser Clipboard API, available on localhost and HTTPS. If clipboard access is unavailable, the page displays manual-copy instructions.
