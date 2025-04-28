import http.server
import socketserver
import os

# Set the directory to serve files from
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Configure server settings
PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
})

# Create and start the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    print(f"Serving files from: {os.getcwd()}")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()