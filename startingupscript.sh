#!/bin/bash

# Ensure depencencies are installed

echo "Checking dependencies..."
if [-z "$(python3 -m pip list | grep mysql-connector-python)" ]; then
    echo "mysql-connector-python not found. Installing..."
    python3 -m pip install mysql-connector-python
fi
if [-z "$(python3 -m pip list | grep django)" ]; then
    echo "Django not found. Installing..."
    python3 -m pip install django
fi
if [-z "$(python3 -m pip list | grep djangorestframework)" ]; then
    echo "Django REST framework not found. Installing..."
    python3 -m pip install djangorestframework
fi

#if [-z "$(python3 -m pip list | grep django-cors-headers)" ]; then
#    echo "django-cors-headers not found. Installing..."
#    python3 -m pip install django-cors-headers
#fi

echo "Dependencies installed. Starting Django configuration..."
python3 manage.py makemigrations
python3 manage.py migrate
echo "Creating superuser..."
python3 manage.py createsuperuser --username=admin --password=admin
echo "Superuser created. Starting the server..."
python3 manage.py runserver