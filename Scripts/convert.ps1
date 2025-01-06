[CmdletBinding(SupportsShouldProcess=$true)]
param (
    [Parameter(Mandatory=$true, Position=0, HelpMessage="Input text to be processed.")]
    [string]$inputText
)

# Set output encoding to UTF-8 for compatibility
$OutputEncoding = [System.Text.Encoding]::UTF8

# Define replacements for characters with diacritics
$replacements = @{
    "ä" = "&auml;"
    "ö" = "&ouml;"
    "ü" = "&uuml;"
    "õ" = "&otilde;"
    "ð" = "&scaron;"
    "þ" = "&zcaron;"
}

$output = $inputText
$replacementCount = @{}


# Replace and count occurrences of each target character
foreach ($key in $replacements.Keys) {
    $count = ($output -split [regex]::Escape($key)).Length - 1
    $output = $output -replace [regex]::Escape($key), $replacements[$key]
    if ($count -gt 0) {
        $replacementCount[$key] = $count
    }
}

# Output transformed text
Write-Output $output

# Output statistics
if ($replacementCount.Count -gt 0) {
    Write-Output "Vahetatud:"
    foreach ($key in $replacementCount.Keys) {
        Write-Output "${key}: $($replacementCount[$key])"
    }
    $total = $replacementCount.Values | Measure-Object -Sum | Select-Object -ExpandProperty Sum
    Write-Output "Kokku: $total"
} else {
    Write-Output "Ei leidnud ühtegi täpitähte."
}

# Register help information
function Show-Help {
    $helpText = @"
NAME
    convert.ps1 - Replaces characters with diacritics with corresponding HTML entities.

SYNOPSIS
    This script replaces characters with diacritics in the input text with their respective HTML entities and outputs the transformed text along with statistics.

SYNTAX
    .\convert.ps1 -inputText "<YourTextHere>"

DESCRIPTION
    The script performs replacements of specific characters (ä, ö, ü, õ, ð, þ) in the input text and substitutes them with their corresponding HTML entities, such as &auml;, &ouml;, &uuml;, etc.

PARAMETERS
    -inputText <string>
        The text in which diacritic characters should be replaced.

EXAMPLES
    1. Replace characters in a string:
        .\convert.ps1 -inputText "Mängijad mängivad"

    2. Get help:
        .\convert.ps1 -help

NOTES
    This script assumes that the input text uses characters that need to be replaced with HTML entities.
    The replacement process is case-sensitive.

"@
    Write-Output $helpText
}

# Show help if -help argument is passed
if ($PSCmdlet.MyInvocation.BoundParameters["help"]) {
    Show-Help
}


# foreach ($char in $inputText.ToCharArray()) {
#     Write-Output "${char}: $([int][char]$char)"
# }
