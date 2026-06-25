# flatten.ps1
$ErrorActionPreference = "Stop"
$root = "c:\Users\steve\Downloads\conceptful-website\conceptful-website"

Write-Host "Creating temp flat directory..."
New-Item -Path "$root\temp-flat" -ItemType Directory -Force | Out-Null

Write-Host "Copying Next.js source code to temp-flat..."
# Exclude node_modules and .next to avoid file locks
Get-ChildItem -Path "$root\artifacts\conceptful" -Exclude "node_modules", ".next" | Copy-Item -Destination "$root\temp-flat" -Recurse -Force

Write-Host "Cleaning up old monorepo files..."
# Delete the old files. We keep extras and temp-flat.
$itemsToKeep = @("temp-flat", "extras", ".git", ".gitignore", "transform.mjs", "flatten.ps1")
Get-ChildItem -Path $root | Where-Object { $itemsToKeep -notcontains $_.Name } | Remove-Item -Recurse -Force

Write-Host "Moving flat contents to root..."
Get-ChildItem -Path "$root\temp-flat" | Move-Item -Destination $root -Force
Remove-Item -Path "$root\temp-flat" -Force

Write-Host "Flattening complete!"
