@echo off
:: Check if the correct number of arguments is provided
if "%~2"=="" (
    echo Usage: ziplaw_script.bat ^<file_path^> ^<top_n^>
    exit /b 1
)

:: Assign inputs to variables
set "file_path=%~1"
set "top_n=%~2"

:: Check if the file exists
if not exist "%file_path%" (
    echo File not found: %file_path%
    exit /b 1
)

:: Call the Python script
py zipf_law.py "%file_path%" "%top_n%"
if errorlevel 1 (
    echo Error: The Python script failed.
    exit /b 1
)
