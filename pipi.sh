# =========================
# 0) БАЗОВОЕ СОСТОЯНИЕ VPS
# =========================
whoami
hostnamectl
date
uptime
free -h
df -h
lsb_release -a 2>/dev/null || cat /etc/os-release

# =========================
# 1) DNS / СЕТЬ / ДОСТУПНОСТЬ ДОМЕНА it-works.su
# (выполнять на VPS)
# =========================
echo "=== DNS for it-works.su ==="
getent hosts it-works.su || true
getent hosts www.it-works.su || true

echo "=== Public IP this VPS uses (outgoing) ==="
curl -4 ifconfig.me ; echo
curl -6 ifconfig.me 2>/dev/null ; echo

echo "=== HTTP(S) check to it-works.su from VPS itself ==="
curl -I http://it-works.su 2>/dev/null | sed -n '1,20p'
curl -I https://it-works.su 2>/dev/null | sed -n '1,30p'

# =========================
# 2) FIREWALL / ПОРТЫ
# =========================
echo "=== Open/listening ports ==="
ss -lntp | sed -n '1,200p'

echo "=== UFW (if used) ==="
ufw status verbose 2>/dev/null || true

# =========================
# 3) DOCKER / COMPOSE ЖИВЫ?
# =========================
docker version
docker info | sed -n '1,120p'
docker compose version || docker-compose version

systemctl status docker --no-pager -l | sed -n '1,120p'

echo "=== Docker containers ==="
docker ps -a

echo "=== Docker images (top) ==="
docker images | sed -n '1,80p'

# =========================
# 4) ГДЕ ЛЕЖИТ РЕПОЗИТОРИЙ (проверим текущую папку)
# - Выполни это В ПАПКЕ ПРОЕКТА на VPS
# =========================
pwd
ls -la | sed -n '1,200p'
git status || true
git remote -v || true
git log -1 --oneline || true

# Если у тебя docker-compose.yml / compose.yml в другом месте - скажи/покажи путь.
ls -la docker-compose.yml compose.yml 2>/dev/null || true

# =========================
# 5) DOCKER COMPOSE СТАТУС (в папке, где compose файл)
# =========================
docker compose ps 2>/dev/null || true
docker compose config 2>/dev/null | sed -n '1,200p' || true

# Логи: сначала последние 200 строк (если сервисов много - всё равно присылай)
docker compose logs --no-color --tail=200 2>/dev/null || true

# =========================
# 6) ПРОКСИ (Nginx/Caddy/Traefik?) + SSL
# =========================
echo "=== Web server units ==="
systemctl list-unit-files | grep -E 'nginx|caddy|traefik' || true

echo "=== Nginx status/config (if used) ==="
systemctl status nginx --no-pager -l 2>/dev/null | sed -n '1,120p' || true
nginx -t 2>/dev/null || true
ls -la /etc/nginx/sites-enabled 2>/dev/null || true
grep -R "it-works.su" -n /etc/nginx 2>/dev/null | sed -n '1,120p' || true

echo "=== Caddy status/config (if used) ==="
systemctl status caddy --no-pager -l 2>/dev/null | sed -n '1,120p' || true
ls -la /etc/caddy 2>/dev/null || true
grep -R "it-works.su" -n /etc/caddy 2>/dev/null | sed -n '1,120p' || true

echo "=== Certbot (if used) ==="
certbot certificates 2>/dev/null || true

# =========================
# 7) ЛОКАЛЬНАЯ ПРОВЕРКА ОТДАЧИ С СЕРВЕРА (важно)
# =========================
# Если твой сайт слушает, например, 3000 - это покажет.
# Если не знаешь порт - по выводу ss/docker ps поймём.
echo "=== Try localhost common ports ==="
for p in 80 443 3000 8080; do
  echo "--- curl localhost:$p ---"
  curl -I "http://127.0.0.1:$p" 2>/dev/null | sed -n '1,10p' || true
done

# Проверка именно домена it-works.su на localhost через Host header (если прокси настроен):
echo "=== Host header check for it-works.su on localhost:80 ==="
curl -I http://127.0.0.1 -H "Host: it-works.su" 2>/dev/null | sed -n '1,20p' || true
