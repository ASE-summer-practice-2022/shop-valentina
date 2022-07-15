#!/bin/bash

shopt -s extglob
rm -r resources/!(views)
cp -a ../frontend/src/* resources/