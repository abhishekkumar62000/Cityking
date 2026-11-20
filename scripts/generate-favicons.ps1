Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\DELL\Downloads\City King Website\src\assets\Cityking Logo.png"
$publicDir = "c:\Users\DELL\Downloads\City King Website\public"

if (!(Test-Path $srcPath)) {
    Write-Error "Source logo not found at $srcPath"
    exit 1
}

$src = [System.Drawing.Bitmap]::new($srcPath)

# Bounding box of non-transparent content in Cityking Logo.png:
# X: 160 to 2212 (width 2052), Y: 156 to 1424 (height 1268)
$cropRect = [System.Drawing.Rectangle]::new(160, 156, 2052, 1268)

function GenerateSquareIcon($targetSize, $bgColor, $paddingRatio) {
    $bmp = [System.Drawing.Bitmap]::new($targetSize, $targetSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    if ($bgColor -ne $null) {
        $brush = [System.Drawing.SolidBrush]::new($bgColor)
        $g.FillRectangle($brush, 0, 0, $targetSize, $targetSize)
        $brush.Dispose()
    } else {
        $g.Clear([System.Drawing.Color]::Transparent)
    }

    $availSize = $targetSize * (1.0 - $paddingRatio * 2)
    $scale = [Math]::Min($availSize / $cropRect.Width, $availSize / $cropRect.Height)
    $destW = [int]($cropRect.Width * $scale)
    $destH = [int]($cropRect.Height * $scale)
    $destX = [int](($targetSize - $destW) / 2)
    $destY = [int](($targetSize - $destH) / 2)
    $destRect = [System.Drawing.Rectangle]::new($destX, $destY, $destW, $destH)

    $g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    return $bmp
}

Write-Host "Generating PNG icon files from official City King logo..."

# 1. 16x16
$ico16 = GenerateSquareIcon 16 $null 0.04
$ico16.Save("$publicDir\favicon-16x16.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 2. 32x32
$ico32 = GenerateSquareIcon 32 $null 0.04
$ico32.Save("$publicDir\favicon-32x32.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 3. 48x48 (Google Search official recommendation)
$ico48 = GenerateSquareIcon 48 $null 0.04
$ico48.Save("$publicDir\favicon-48x48.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 4. 64x64
$ico64 = GenerateSquareIcon 64 $null 0.04
$ico64.Save("$publicDir\favicon-64x64.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 5. 96x96
$ico96 = GenerateSquareIcon 96 $null 0.04
$ico96.Save("$publicDir\favicon-96x96.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 6. 128x128
$ico128 = GenerateSquareIcon 128 $null 0.04
$ico128.Save("$publicDir\favicon-128x128.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 7. 144x144
$ico144 = GenerateSquareIcon 144 $null 0.04
$ico144.Save("$publicDir\favicon-144x144.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 8. 180x180 (Apple Touch Icon with #24140e brand cocoa background to prevent iOS black wash)
$brandCocoa = [System.Drawing.Color]::FromArgb(255, 36, 20, 14) # #24140e
$appleIcon = GenerateSquareIcon 180 $brandCocoa 0.08
$appleIcon.Save("$publicDir\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$appleIcon.Dispose()

# 9. 192x192 (PWA Android standard)
$pwa192 = GenerateSquareIcon 192 $null 0.05
$pwa192.Save("$publicDir\icon-192.png", [System.Drawing.Imaging.ImageFormat]::Png)
$pwa192.Dispose()

# 10. 256x256
$ico256 = GenerateSquareIcon 256 $null 0.04
$ico256.Save("$publicDir\favicon-256x256.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 11. 512x512 (PWA Splash & Standard Favicon PNG & logo.png)
$icon512 = GenerateSquareIcon 512 $null 0.04
$icon512.Save("$publicDir\icon-512.png", [System.Drawing.Imaging.ImageFormat]::Png)
$icon512.Save("$publicDir\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$icon512.Save("$publicDir\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$icon512.Dispose()

$ico16.Dispose()
$ico32.Dispose()
$ico48.Dispose()
$ico64.Dispose()
$ico96.Dispose()
$ico128.Dispose()
$ico144.Dispose()
$ico256.Dispose()
$src.Dispose()

Write-Host "All PNG resolutions generated successfully."
