#!/bin/bash

# Ensure depencencies are installed
echo "Installing dependencies..."
python3 -m pip install mysql-connector-python
python3 -m pip install django
python3 -m pip install djangorestframework
#python3 -m pip install django-cors-headers

echo "Dependencies installed. Starting Django configuration..."
python3 manage.py makemigrations
python3 manage.py migrate
echo "Creating superuser..."
python3 manage.py createsuperuser --username=admin --password=admin
echo "Superuser created. Starting the server..."
python3 manage.py runserver