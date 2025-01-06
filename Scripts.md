# Scripting subject
## Table of Contents

- [Details](#details)
- [Description](#description)
    - [Script 1: Replace Estonian Characters](#script-1-replace-estonian-characters)
    - [Script 2: Zipflaw](#script-2-zipflaw)
    - [Script 3: Sort Pictures by Date](#script-3-sort-pictures-by-date)
- [Fix to my failure](#fix-to-my-failure)
- [Do first one work?](#do-first-one-work)
- [How to use?](#how-to-use)
    - [Running the First Script](#running-the-first-script)
    - [Running the Second Script](#running-the-second-script)
    - [Running the Third Script](#running-the-third-script)
- [If you give me more time](#if-you-give-me-more-time)

## Details

Student: Sergei Ivanov

Instructor: Andre Sääsk 

Subject: Scripting languages 

Deadline: 06.01.2025

## Description

I had to create and implement 3 scripts:

### Script 1: Replace Estonian Characters

To replace Estonian characters with HTML-equivalents (Had to use Estonian encoding chcp 775) using PowerShell

### Script 2: Zipflaw

Zipflaw using Python and Bat (to call Python)

### Script 3: Sort Pictures by Date

Sort pictures by data and group them into folders (name with data)

> I failed the third one even though it works. It sends `.jpg` pictures into `Unknown` because it cannot find the date.

### Fix to my failure

It would make sense either name pictures after data initially (when you do pictures, save them using name+date, so you could split).
In this case, date would be available and you could simply group and sort by it using Python or PowerShell.

### Do first one work?

Yes, based on the mock data, it works. The second is tricky. I didn't test it outside my own text.txt. Yours implies books.vbs which I didn't have so I could not test it.

## How to use?

### Running the First Script

The first script requires you to bypass security because when running locally, my own scripts won't run. So, to see what it does (even if it prints `Hello World`), you have to `powershell -ExecutionPolicy Bypass -File .\script.ps1`. This way, you can run your own scripts.

> WARNING! Never use `powershell -ExecutionPolicy Bypass -File` for downloaded scripts from unknown source. Always verify that the script is safe to run!

If you use `.bat`, then `.\script.bat` is the command to run it. Again, please refer to safety protocols when you run scripts. 

- The first script contains some help: `.\convert.ps1` will trigger help docs. If you use `.bat`, then it is equivalent: `.\script.bat` also triggers the help if developer expected `user input` to be `""`. So, you use the script as follows:

```powershell

powershell -ExecutionPolicy Bypass -File .\convert.ps1 -inputText "Your text"

```

You can try your own example given in the requirements file.

### Running the Second Script

The second script is done via Python. The `.bat` file only calls the Python. So, you can use `.bat` script directly

```bat

.\ziplaw_script.bat test.txt 10

```

where `test.txt` is my own example of a book. You can choose your own `.txt`

### Running the Third Script

The third script is complicated. We rely on the exiftool library which if you don't have, forced to install and add to env:

Path is the C:/exiftool/exiftool.exe 

You will have to rename it to `exiftool.exe` from `exiftool(k).exe`. Then you can open up CMD using administrator and enter PowerShell. Once there, you can use 

```powershell

[System.Environment]::SetEnvironmentVariable("EXIFTOOL_PATH", "C:\exiftool\exiftool.exe", [System.EnvironmentVariableTarget]::Machine)

```

You can check it by

```powershell

[System.Environment]::GetEnvironmentVariable("EXIFTOOL_PATH", [System.EnvironmentVariableTarget]::Machine)

```

Once done, you can call the script. For simplicity, I created `Pictures` directory in `C:\` and the script creates `C:\SortedPictures` automatically (because if not exists statement is executed). You can drop any pictures into `C:\Pictures`, but make sure they all have `.jpb`. The `Paint` program saves your images as `.jpeg`, and this also worked. Now, you can do

```bat

.\sort C:\Pictures C:\SortedPictures

```

You are done. It will move all your pictures into Unknown subfolder of the SortedPictures because DateTime is messed up. 

## If you give me more time

I can fix the third script by adding another script to assume you have pictures in the format `NAME-DATETIME` and extract all dates and names and then sort and groupby datetime. Pretty easy, right? It is much easier than the bat relying on exiftool.