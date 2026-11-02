@echo off
title Upload Tazyeenul Quran Academy to GitHub
color 0A
echo ========================================================
echo   Tazyeenul Quran Academy - GitHub Upload Helper
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Git is not installed or not found in PATH.
    echo.
    echo Please install Git from: https://git-scm.com/downloads
    echo Or upload the prepared ZIP file directly on GitHub.com!
    echo.
    echo ZIP File Location:
    echo C:\Users\Mega Computer\.gemini\antigravity\scratch\tazyeenul-quran-academy-github.zip
    echo.
    pause
    exit /b
)

echo [*] Initializing Git repository...
git init
git branch -M main

echo [*] Staging all files (node_modules is excluded automatically)...
git add .

set /p commit_msg="Enter commit message (Press Enter for default: 'Initial commit'): "
if "%commit_msg%"=="" set commit_msg=Initial commit: Tazyeenul Quran Academy website

git commit -m "%commit_msg%"

echo.
echo Please create a new repository on GitHub: https://github.com/new
set /p repo_url="Enter your GitHub Repository URL (e.g., https://github.com/username/tazyeenul-quran-academy.git): "

if "%repo_url%"=="" (
    echo [!] No URL provided. You can run git remote add origin <url> manually later.
    pause
    exit /b
)

git remote remove origin >nul 2>nul
git remote add origin %repo_url%
echo.
echo [*] Pushing to GitHub...
git push -u origin main

echo.
echo ========================================================
echo   Done! Your project is now on GitHub.
echo ========================================================
pause
