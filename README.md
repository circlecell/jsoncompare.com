# jsonlint
Source code for http://jsonlint.com

## API
``POST /api/save`` - saves current application state. A body should be JSON with 3 keys:
- ``simple`` [string] - contains base64-encoded value of Simple tab
- ``batch`` [array of strings] - contains an array of base64-encoded values for Batch tab
- ``diff`` [object] - contains data for Merge tab with keys "left" (base64-encoded value of left side editor) and "right" (base64-encoded value of right side editor).
