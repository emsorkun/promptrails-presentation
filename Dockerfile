FROM nginx:alpine

# Copy static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Copy nginx config template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Railway uses dynamic PORT env variable
ENV PORT=8080
EXPOSE 8080

# nginx will substitute ${PORT} from environment variable automatically
