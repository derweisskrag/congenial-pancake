@echo off
:: Check input arguments
if "%~2"=="" (
    echo Usage: sort_pictures.bat ^<source_folder^> ^<destination_folder^>
    exit /b 1
)

:: Set variables
set "source=%~1"
set "destination=%~2"
set "report=sorting_report.txt"
set /a total_files=0
set /a total_folders=0
setlocal enabledelayedexpansion

:: Clear or create the report file
> "%report%" echo Sorting Report

:: Ensure the destination folder exists
if not exist "%destination%" mkdir "%destination%"

:: Recursively process JPEG files
for /r "%source%" %%F in (*.jpg *.jpeg) do (
    :: Extract date using exiftool from environment variable EXIFTOOL_PATH
    set "date_folder="
    for /f "tokens=2 delims=:" %%D in ('"%EXIFTOOL_PATH%" -DateTimeOriginal -d "%%Y-%%m-%%d" "%%F" 2^>nul') do (
        set "date_folder=%%D"
    )

    :: If DateTimeOriginal is not found, fallback to FileModificationDate
    if "!date_folder!"=="" (
        for /f "tokens=2 delims=:" %%D in ('"%EXIFTOOL_PATH%" -FileModificationDate -d "%%Y-%%m-%%d" "%%F" 2^>nul') do (
            set "date_folder=%%D"
        )
    )

    :: Default to "Unknown" if no date is found
    if "!date_folder!"=="" set "date_folder=Unknown"

    :: Create the target folder
    set "target_folder=%destination%\!date_folder!"
    if not exist "!target_folder!" (
        mkdir "!target_folder!"
        set /a total_folders+=1
    )

    :: Move the file
    move "%%F" "!target_folder!\" >nul
    set /a total_files+=1

    :: Append to the report
    echo Moved %%~nF%%~xF to !target_folder! >> "%report%"
)

:: Summary report
echo Total Files: %total_files% >> "%report%"
echo Total Folders: %total_folders% >> "%report%"

:: Display the report
type "%report%"
