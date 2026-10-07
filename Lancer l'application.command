#!/bin/bash
# Double-clique sur ce fichier (macOS) pour lancer l'application de révision.
cd "$(dirname "$0")" || exit 1
PORT=8765
echo "Linux Révision — http://localhost:$PORT"
echo "Laisse cette fenêtre ouverte pendant la première visite (installation hors ligne)."
echo "Ensuite, l'application installée fonctionne sans connexion. Ctrl+C pour arrêter."
( sleep 1; open "http://localhost:$PORT" ) &
exec /usr/bin/python3 -m http.server "$PORT" --bind 127.0.0.1
