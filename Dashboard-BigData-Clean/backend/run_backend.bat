@echo off
echo =======================================================
echo     INICIALIZANDO BACKEND PYTHON + SPARK
echo =======================================================
echo Instalando/Atualizando dependencias do Python...
pip install -r requirements.txt
echo.
echo Iniciando servidor Flask (com Spark local)...
python app.py
pause
