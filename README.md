# Doku

## Development
You can start both by running the `run-dev.bat` file, or pick separately.
### Run WebApi:
Webapi runs on port `5000`
```
dotnet watch run
```

### Run Angular app with proxy:
run the watcher for frontend build
```
ng build --watch
```
or run static host on port `4200` and proxy redirect `/api/` to webapi 
```
ng serve --proxy-config proxy.config.json
```
