@echo off
echo =======================================================
echo     INICIALIZANDO BIG DATA AEROANALYTICS
echo =======================================================
echo.
echo 1. Iniciando servidor Backend (Flask + PySpark)...
start "Backend - Flask/Spark" cmd /k "cd backend && run_backend.bat"
echo.
echo 2. Iniciando servidor Frontend (React + Vite)...
start "Frontend - Vite/React" cmd /k "cd frontend && run_frontend.bat"
echo.
echo Aguardando inicializacao dos servidores (5 segundos)...
ping 127.0.0.1 -n 6 > nul
echo.
echo Abrindo o navegador em http://localhost:5173...
start http://localhost:5173
echo.
echo Servidores inicializados em janelas separadas.
echo Voce pode fechar esta janela principal.
ping 127.0.0.1 -n 3 > nul
exit
