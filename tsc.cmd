@echo off
setlocal
set NODE_PATH=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Microsoft\VisualStudio\NodeJs
set NODE_EXE=%NODE_PATH%\win-x64
set TSC_JS=%~dp0node_modules\typescript\bin\tsc
set Path=%Path%;%NODE_EXE%
"%NODE_EXE%\node.exe" "%TSC_JS%" %*
endlocal
