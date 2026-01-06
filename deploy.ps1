# EaseFetch 一键部署脚本
# 使用方法: .\deploy.ps1 "你的提交信息"

param(
    [string]$CommitMessage = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

Write-Host "=== EaseFetch 自动部署 ===" -ForegroundColor Cyan

# 检查是否在正确目录
if (!(Test-Path "package.json")) {
    Write-Host "错误：请在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

# 添加所有更改
Write-Host "`n[1/3] 添加文件..." -ForegroundColor Yellow
git add .

# 提交
Write-Host "[2/3] 提交更改: $CommitMessage" -ForegroundColor Yellow
git commit -m "$CommitMessage"

# 推送到 GitHub
Write-Host "[3/3] 推送到 GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ 代码已成功推送到 GitHub" -ForegroundColor Green
    
    # 检查是否安装了 Vercel CLI
    if (Get-Command "vercel" -ErrorAction SilentlyContinue) {
        Write-Host "`n[可选] 检测到 Vercel CLI，是否立即部署？(Y/N)" -ForegroundColor Cyan
        $response = Read-Host
        if ($response -eq "Y" -or $response -eq "y") {
            Write-Host "正在部署到 Vercel..." -ForegroundColor Yellow
            vercel --prod --yes
            Write-Host "`n✓ 部署完成！" -ForegroundColor Green
        }
    }
    else {
        Write-Host "`n提示：安装 Vercel CLI 可实现一键部署：npm install -g vercel" -ForegroundColor Gray
    }
}
else {
    Write-Host "`n✗ 推送失败，请检查网络或 GitHub 权限" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== 部署完成 ===" -ForegroundColor Cyan
