# Safety check: is .env.local tracked by git?
git ls-files --error-unmatch ".env.local" 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "STOP: .env.local is tracked by git. Remove it first:" -ForegroundColor Red
    Write-Host "  git rm --cached .env.local" -ForegroundColor Yellow
    exit 1
}
Write-Host ".env.local is safe (not tracked)." -ForegroundColor Green

# Stage, commit, push
git add .

$msg = $args[0]
if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = "Update site - " + (Get-Date -Format "yyyy-MM-dd HH:mm")
}

git commit -m "$msg"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Nothing to commit." -ForegroundColor Yellow
    exit 0
}

git push origin main
Write-Host "Done. Pushed to GitHub." -ForegroundColor Green
