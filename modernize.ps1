param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$ArgsList
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$cliPath = Join-Path $scriptDir "tools\\modernize.mjs"

if (-not (Test-Path $cliPath)) {
    Write-Error "modernize CLI not found at $cliPath"
    exit 1
}

node $cliPath @ArgsList
