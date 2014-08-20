#!/bin/bash
gulp build
rsync -azv -O --chmod g+w dist/* /path/to/remote/server
echo 'Deployed dist/* to /path/to/remote/server'
