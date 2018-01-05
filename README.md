# jsoncompare.com [![Build Status](https://travis-ci.org/circlecell/jsoncompare.com.svg?branch=master)](https://travis-ci.org/circlecell/jsoncompare.com)

Source code for [jsoncompare.com](jsoncompare.com).

## API
``POST https://jsoncompare.com/api/save`` - saves current application state on S3.
A body should include 3 keys:
- ``simple`` *string* - base64-encoded value of the Simple tab
- ``batch`` *string[]* - an array of base64-encoded values for the Batch tab
- ``diff`` *object* - data forthe  Diff tab with keys "left" (base64-encoded value of the left side editor) and "right" (base64-encoded value of the right side editor).

Response JSON includes ``key`` - a name of newly created file on S3 (MD5 hash of the body) or ``error`` if there is an error.

Example:
```js
>>>
{
	"simple": "eyJhIjogMX0=",
	"batch": ["eyJiIjogMn0=", "eyJjIjogM30=", "eyJkIjogNH0="],
	"diff": {
		"left": "eyJlIjogNX0=",
		"right": "eyJmIjogNn0="
	}
}
<<<
{ "key":"aac35abfc8e25a4914cf90da13aa29e9" } 
```


``GET https://jsonlintcom.s3.amazonaws.com/{key}.json`` - gets an application state by given key.
