"use strict";
const child_process = require('child_process')
let hostToIp = host => {
	if(/^(?:[\w][\w-]*[\w]\.|[\w]\.)+(?:[\w]{2,})$/.test(host)){
		try {
			let pingRes = child_process.execSync("ping "+host+" -l 0 -n 1").toString(); // for win
			return  /(\d{1,3}\.){3}\d{1,3}/.exec(pingRes)[0];
		} catch(e) {
			try {
				let pingRes = child_process.execSync("ping -c 1 -s 0 "+host).toString();// for osx
				return  /(\d{1,3}\.){3}\d{1,3}/.exec(pingRes)[0];
			} catch(e) {
				return false;
			}
		}
	}
	return false;
}

module.exports = {
	hostToIp : hostToIp,
	hti : hostToIp
}