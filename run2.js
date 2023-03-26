#!/bin/sh
UUID=${UUID:-'973ee575-a0ff-4a48-b938-0698e95a7159'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
