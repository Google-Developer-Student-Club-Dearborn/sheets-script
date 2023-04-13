You need a `credentials.json` specifying a google service account:
```
{
  "type":...,
  "project_id":...,
  "private_key_id":...,
  "private_key":...,
  "client_email":...,
  "client_id":...,
  "auth_uri":...,
  "token_uri":...,
  "auth_provider_x509_cert_url":...,
  "client_x509_cert_url":...,
}
```

I can give you my file if you want, and hence my service account.

This service account must have `Editor` access to the google sheet.

This script Adds a value to the sheet
https://docs.google.com/spreadsheets/d/18GRXGVHwiPrHsUNzTecIHC8KyYFe2wLkqVlDkuwxVbc/edit?usp=sharing

For conditional formatting this is better and easier to be done from the google sheets interface itself.