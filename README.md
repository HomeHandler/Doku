# Doku

## Development
You can start both by running the `run-dev.bat` file, or pick separately.
### Run WebApi:
Webapi runs on port `5000`
```
dotnet watch run
```

### Run Angular app:
Angular app runs on port `4200` and proxy config redirects `/api/` to webapi
```
ng serve --proxy-config proxy.config.json
```
