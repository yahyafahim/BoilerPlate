#!/bin/bash
cd ~/Desktop/$1/android
source $HOME/.bash_profile
./gradlew assembleRelease
open ~/Desktop/$1/android/app/build/outputs/apk/release
