#!/bin/bash
gulp build
rsync -azv -O --chmod g+w dist/* vps01.kolibri.is:/www/stage.kolibri.is
echo 'Deployed dist/* to stage.kolibri.is'
