@echo off
setlocal
cd /d "%~dp0backend"
if not exist "src\db\database.js" (
  echo [ERREUR] src\db\database.js est manquant.
  echo Ce dossier n'est pas la version complete du projet Virtus.
  pause
  exit /b 1
)
for /f "tokens=1 delims=." %%v in ('node -p "process.versions.node"') do set NODE_MAJOR=%%v
if "%NODE_MAJOR%"=="" (
  echo [ERREUR] Node.js n'est pas installe.
  pause
  exit /b 1
)
if %NODE_MAJOR% LSS 22 (
  echo [ERREUR] Node.js 22 ou plus recent est requis. Version detectee:
  node -v
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installation des dependances backend...
  call npm ci
  if errorlevel 1 exit /b 1
)
echo Initialisation de la base...
call npm run db:init
if errorlevel 1 exit /b 1
echo Demarrage du backend Virtus...
call npm run dev
