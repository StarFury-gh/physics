var time_map = new Map([
    ["d", 86400],
    ["h", 3600],
    ["m", 60],
    ["s", 1]
])
var moving_map = new Map([
    ["km", 1000],
    ["m", 1],
    ["sm", 0.01],
    ["mm", 0.001]
])
results.onclick = function(){
    var moving_v = document.getElementById("moving").value;
    var time_v = document.getElementById("time").value;
    var ac_v = document.getElementById("ac").value;
    var speed_v = document.getElementById("speed").value;
    var speed0_v = document.getElementById("speed0").value;

    var moving = document.getElementById("moving");
    var moving_type = document.getElementById("moving-type").value;
    var time = document.getElementById("time");
    var ac = document.getElementById("ac");
    var speed = document.getElementById("speed");
    var speed0 = document.getElementById("speed0");

    if (not-ss.checked) {
        speed0_v = 0;
    }
    if (not-fs.checked) {
        speed_v = 0;
    }
    if (moving-type == "rm") {
        ac_v = 0;
    }
    if (moving-type == "rz") {
        ac_v = ac_v * (-1);
    }

    if (moving_v == "") {
        var t = 1;
    }
    else if (time_v == "") {
        var t = 2;
    }
    else if (ac_v == "") {
        var t = 3;
    }
    else if (speed_v == "") {
        var t = 4;
    }
    else if (speed0_v == "") {
        var t = 5;
    }
    var time_izm = document.getElementById("time-izm").value;
    var moving_izm = document.getElementById("moving-izm").value;
    var si = document.getElementById("si");
    console.log();
    if (si.checked) {
        if (t == 1) {
            mass_v = mass_v * mass_map.get(mass_izm);
            volume_v = volume_v * volume_map.get(volume_izm);
            document.getElementById("density").value = mass_v / volume_v;
        }
        if (t == 2) {
            volume_v = volume_v * volume_map.get(volume_izm);
            density_v = density_v * mass_map.get(mass_izm);
            document.getElementById("mass").value = volume_v * density_v;
        }
        if (t == 3) {
            mass_v = mass_v * mass_map.get(mass_izm);
            density_v = density_v / volume_map.get(volume_izm);
            document.getElementById("volume").value = mass_v / density_v;
        }
    }
    else {
        if (t == 1) {
            document.getElementById("density").value = mass_v / volume_v;
        }
        if (t == 2) {
            document.getElementById("mass").value = density_v * volume_v;
        }
        if (t == 3) {
            document.getElementById("volume").value = mass_v / density_v;
        }
    }
    
}

density_del.onclick = function() {
    document.getElementById("density").value = "";
}
mass_del.onclick = function() {
    document.getElementById("mass").value = "";
}
volume_del.onclick = function() {
    document.getElementById("volume").value = "";
}
