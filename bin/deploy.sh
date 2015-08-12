#!/bin/bash
branch_name=$(git symbolic-ref --short -q HEAD)

gulp deployBuild
rsync -azv -O --chmod g+w dist/* vps01.kolibri.is:/www/kolibri-emails/$branch_name
echo "Deployed dist/* to emails.kolibri.is/$branch_name"
