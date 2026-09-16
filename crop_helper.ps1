Add-Type -AssemblyName System.Drawing

function DoCrop($pIn, $pOut, $x, $y, $w, $h) {
    $bmp = [System.Drawing.Bitmap]::FromFile($pIn)
    $rc = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $res = $bmp.Clone($rc, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $res.Save($pOut, [System.Drawing.Imaging.ImageFormat]::Png)
    $res.Dispose()
    $bmp.Dispose()
}

$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$pub = Join-Path $dir "public\images"

$lightIn = Join-Path $pub "logo_sv.jpg"
$darkIn = Join-Path $pub "darklogo_sv.jpg"

$lightOut = Join-Path $pub "sv_symbol_light_raw.png"
$darkOut = Join-Path $pub "sv_symbol_dark_raw.png"

# Light mode center mark (Monochrome Navy)
DoCrop $lightIn $lightOut 1420 320 640 800

# Light mode gold torch mark from bottom right (X: 810 to 930 approx of 2816)
# Bottom right card in darklogo_sv.jpg is X: 2110 to 2816, Y: 500 to 1536
# The SV symbol with gold torch is X: 2240 to 2680, Y: 580 to 1020
$goldSymbolOut = Join-Path $pub "sv_symbol_gold_raw.png"
DoCrop $darkIn $goldSymbolOut 2240 580 440 440

# Dark mode top-right mark (isolated on clean solid black background, w=350, h=460)
DoCrop $darkIn $darkOut 2280 60 380 460

# Full lockup dark mode (symbol + SOLUVIRTUS + subtext)
$darkLockupOut = Join-Path $pub "sv_lockup_dark.png"
DoCrop $darkIn $darkLockupOut 2150 50 630 630

Write-Output "OK"
