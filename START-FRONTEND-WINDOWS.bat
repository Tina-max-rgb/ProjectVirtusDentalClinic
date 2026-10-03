@echo off
setlocal
cd /d "%~dp0frontend"
if not exist "package.json" (
  echo [ERREUR] frontend/package.json est manquant.
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installation des dependances frontend...
  call npm ci
  if errorlevel 1 exit /b 1
)
call npm run dev
