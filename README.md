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

This service account must have `Editor` access to the google sheet.