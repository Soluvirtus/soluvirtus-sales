const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// PowerShell script to crop precisely and generate transparent PNG symbols
const psScript = `
Add-Type -AssemblyName System.Drawing

function Crop-Image($inputPath, $outputPath, $x, $y, $w, $h) {
    $img = [System.Drawing.Bitmap]::FromFile($inputPath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $img.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    # Save as PNG
    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    $img.Dispose()
}

$base = (Resolve-Path "public/images").Path
$lightJpg = Join-Path $base "logo_sv.jpg"
$darkJpg = Join-Path $base "darklogo_sv.jpg"

# Crop clean center SV logo for light mode: around center of 2816x1536
# In logo_sv.jpg, the central clean SV symbol with torch is roughly X=1420 to 2040 (w=620), Y=320 to 1120 (h=800)
Crop-Image $lightJpg (Join-Path $base "sv_symbol_light_raw.png") 1440 330 600 780

# In darklogo_sv.jpg, the central luminous cyan SV with torch is around X=1050 to 1800 (w=750), Y=150 to 1100 (h=950)
Crop-Image $darkJpg (Join-Path $base "sv_symbol_dark_raw.png") 1080 160 700 940

Write-Output "Cropped successfully"
`;

fs.writeFileSync('crop.ps1', psScript);
try {
  const out = execSync('powershell -ExecutionPolicy Bypass -File crop.ps1', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.error(e);
}
fs.unlinkSync('crop.ps1');
